import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface EmptyListProps {
    navigation: any
 }

const EmptyList = (props: EmptyListProps) => {
    const {navigation} = props
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Uppss, no data found!</Text>
            <Ionicons name="sad-outline" size={125} color={"#a3a3a3"}/>
            <TouchableOpacity style={styles.goBackButtonContainer} onPress={() => navigation.navigate("ScanQR")}>
                <Text>
                    Go to QR Scanner
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmptyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        marginBottom: 10,
        textAlign: "center",
        fontWeight:"bold",
        fontSize: 20,
        color: "#a3a3a3"
    },
    goBackButtonContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "red"
    }
})
