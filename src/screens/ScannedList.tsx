import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface ScannedListScreenProps { }

const ScannedListScreen = (props: ScannedListScreenProps) => {
    const { scannedQRs } = useSelector((state: RootState) => state.qr)

    const [searchValue, setSearchValue] = useState<string>("")
    const [filteredData, setFiltererData] = useState<string[]>(scannedQRs)

    useEffect(() => {
        if (searchValue !== ""){
            const filteredData = scannedQRs.filter(scannedQR => scannedQR.includes(searchValue))
            setFiltererData(filteredData)
        }else{
            setFiltererData(scannedQRs)
        }
    }, [searchValue])

    return (
        <View style={styles.container}>
            <TextInput value={searchValue} onChangeText={(value) => setSearchValue(value)}/>
            <FlatList keyExtractor={(item, idex) => `ScannedItem: ${item + idex}`} data={filteredData} renderItem={({ item }) => <Text>{item}</Text>} ListEmptyComponent={() => <Text>Uppss, it seems that you havent scan anything yet!</Text>} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})


export default ScannedListScreen
