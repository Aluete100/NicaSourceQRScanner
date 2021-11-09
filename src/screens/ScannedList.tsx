import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface ScannedListScreenProps { }

const ScannedListScreen = (props: ScannedListScreenProps) => {
    const { scannedQRs } = useSelector((state: RootState) => state.qr);

    return (
        <View style={styles.container}>
            <FlatList data={scannedQRs}  renderItem={({item}) => <Text>{item}</Text>}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {}
})


export default ScannedListScreen
