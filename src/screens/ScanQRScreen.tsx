import { useIsFocused } from '@react-navigation/core'
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet, Modal, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import AlertModalDialog from '../components/AlertModalDialog'
import { addQRToList } from '../store/slices/qrSlice'

interface ScanQRScreenProps { }

const ScanQRScreen = (props: ScanQRScreenProps) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const barcodeRef = useRef<BarCodeScanner>(null)

    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [showScannedModal, setShowScannedModal] = useState<boolean>(false)

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        getCameraPermissions()
    }, [])

    const handleBarCodeScanned = (barcodeData: BarCodeEvent) => {
        const { data } = barcodeData
        setShowScannedModal(true)

        dispatch(addQRToList(data))
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                ref={barcodeRef}
                style={styles.qrContainer}
                onBarCodeScanned={showScannedModal ? undefined : handleBarCodeScanned}

            />
            <AlertModalDialog showModal={showScannedModal} titleMessage="Hey You!" subtitleMessage="QR data has been saved. All the info will be shown on the other tab." buttonMessage="Scan Again" onAcceptButtonPressed={() =>
                setShowScannedModal(false)
            } />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    },
    qrContainer: {
        flex: 1,
        marginHorizontal: 20,
    }
})


export default ScanQRScreen
