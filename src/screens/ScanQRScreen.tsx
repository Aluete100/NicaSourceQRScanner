import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { addQRToList } from '../store/slices/qrSlice'

interface ScanQRScreenProps { }

const ScanQRScreen = (props: ScanQRScreenProps) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text>ScanQRScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {}
})


export default ScanQRScreen
