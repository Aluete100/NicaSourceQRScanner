import { Ionicons } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/core'
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet, Modal, Dimensions, ActivityIndicator, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import AlertModalDialog from '../../components/AlertModalDialog'
import { addQRToList } from '../../store/slices/qrSlice'
import PermissionsDenied from './components/PermissionsDenied'
import RequestingPermissions from './components/RequestingPermissions'

interface ScanQRScreenProps { }


const ScanQRScreen = (props: ScanQRScreenProps) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const { width } = Dimensions.get('window')
    const qrSize = width * 0.7

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
        console.log(data)
        setShowScannedModal(true)

        dispatch(addQRToList(data))
    }

    if (hasPermission === null) {
        return <RequestingPermissions />
    }

    if (hasPermission === false) {
        return <PermissionsDenied />
    }

    return (
        <SafeAreaView style={styles.container}>
            {isFocused &&
                <BarCodeScanner
                    style={[StyleSheet.absoluteFill, styles.qrContainer]}
                    onBarCodeScanned={showScannedModal ? undefined : handleBarCodeScanned}
                >
                    <Text style={styles.scanText}>Scan your QR code</Text>
                    <Ionicons name="scan-outline" size={qrSize} color="white" />
                </BarCodeScanner>
            }
            <AlertModalDialog showModal={showScannedModal} titleMessage="Hey You!" subtitleMessage="QR data has been saved. All the info will be shown on the other tab." buttonMessage="Scan Again" onAcceptButtonPressed={() =>
                setShowScannedModal(false)
            } />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    qrContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scanText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
})


export default ScanQRScreen
