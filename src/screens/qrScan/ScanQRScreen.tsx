import { Ionicons } from '@expo/vector-icons'
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import AlertModalDialog from '../../components/AlertModalDialog'
import { addQR } from '../../store/slices/qrSlice'
import PermissionsDenied from './components/PermissionsDenied'
import RequestingPermissions from './components/RequestingPermissions'

const ScanQRScreen = () => {
  const dispatch = useDispatch()

  const [zoomAnim] = useState(new Animated.Value(1))

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

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(zoomAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(zoomAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [])

  const handleBarCodeScanned = (barcodeData: BarCodeEvent) => {
    const { data } = barcodeData
    setShowScannedModal(true)

    dispatch(addQR(data))
  }

  if (hasPermission === null) {
    return <RequestingPermissions />
  }

  if (hasPermission === false) {
    return <PermissionsDenied />
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        style={[StyleSheet.absoluteFill, styles.qrContainer]}
        onBarCodeScanned={showScannedModal ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      >
        <Text style={styles.scanText}>Scan your QR code</Text>
        <Animated.View style={{ opacity: zoomAnim }}>
          <Ionicons name="scan-outline" size={qrSize} color="white" />
        </Animated.View>
      </BarCodeScanner>
      <AlertModalDialog
        showModal={showScannedModal}
        titleMessage="Hey You!"
        subtitleMessage="QR data has been saved. All the info will be shown on the other tab."
        buttonMessage="Scan Again"
        onAcceptButtonPressed={() => setShowScannedModal(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
})

export default ScanQRScreen
