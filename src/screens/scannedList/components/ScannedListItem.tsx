import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface ScannerListItemProps {
    scannedItem: string
}

const ScannerListItem = (props: ScannerListItemProps) => {
    const { scannedItem } = props

    return (
        <View style={styles.container}>
            <Text style={styles.scannedTitle}>Scanned:</Text>
            <Text>{scannedItem}</Text>
        </View>
    )
}

export default ScannerListItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: "white",
    },
    scannedTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0000ff80"
    }
})
