import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface ScannedListScreenProps { }

const ScannedListScreen = (props: ScannedListScreenProps) => {
    const { scannedQRs } = useSelector((state: RootState) => state.qr)

    const [searchValue, setSearchValue] = useState<string>("")
    const [filteredData, setFiltererData] = useState<string[]>(scannedQRs)

    useEffect(() => {
        if (searchValue !== "") {
            const filteredData = scannedQRs.filter(scannedQR => scannedQR.toLowerCase().includes(searchValue.toLowerCase()))
            setFiltererData(filteredData)
        } else {
            setFiltererData(scannedQRs)
        }
    }, [searchValue])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder="Search" value={searchValue} onChangeText={(value) => setSearchValue(value)} /></View>
            <FlatList contentContainerStyle={styles.listContainer} keyExtractor={(item, idex) => `ScannedItem: ${item + idex}`} data={filteredData}
                renderItem={({ item }) => <View>
                    <Text>Scanned:</Text>
                    <Text>{item}</Text>
                </View>} ListEmptyComponent={() => <Text>Uppss, it seems that you havent scan anything yet!</Text>} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    textInputContainer: {
        margin: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: "white",
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    listContainer: {
        marginHorizontal: 20,
    }
})


export default ScannedListScreen
