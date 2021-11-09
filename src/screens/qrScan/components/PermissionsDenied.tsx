import { Ionicons } from '@expo/vector-icons'
import  React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface PermissionsDeniedProps { }

const PermissionsDenied = (props: PermissionsDeniedProps) => {
    return (
        <View style={styles.container}>
            <Ionicons name="alert-circle-outline" size={125} color={"red"}/>
            <Text style={styles.warningText}>No permissions granted</Text>
        </View>
    )
}

export default PermissionsDenied

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    warningText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "600",

    }
})
