import { useIsFocused } from '@react-navigation/core'
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet, Modal, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import AlertModalDialog from '../components/AlertModalDialog'
import { addQRToList } from '../store/slices/qrSlice'

interface ScanQRScreenProps { }

const ScanQRScreen = (props: ScanQRScreenProps) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const scannerRef = useRef<BarCodeScanner>(null)

    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [reRenderScanner, setReRenderScanner] = useState<boolean>(false)
    const [showScannedModal, setShowScannedModal] = useState<boolean>(false)

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        getCameraPermissions()
    }, [])

    useEffect(() => {
        if (!isFocused) {
            setReRenderScanner(true)
        }
    }, [isFocused])

    const handleBarCodeScanned = (barcodeData: BarCodeEvent) => {
        const { data } = barcodeData
        setShowScannedModal(true)

        dispatch(addQRToList(data))
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            {!hasPermission ? <Text>Requesting for camera permission</Text> :
                <BarCodeScanner
                    style={[StyleSheet.absoluteFill, styles.container]}
                    onBarCodeScanned={showScannedModal ? undefined : handleBarCodeScanned}
                >
                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} /></BarCodeScanner>
            }
            <AlertModalDialog showModal={showScannedModal} titleMessage="Hey You!" subtitleMessage="QR data has been saved. All the info will be shown on the other tab." buttonMessage="Scan Again" onAcceptButtonPressed={() =>
                setShowScannedModal(false)
            } />
        </SafeAreaView>
    )
}

const opacity = 'rgba(0, 0, 0, .6)'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    layerTop: {
        flex: 2,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity
    },
})


export default ScanQRScreen
