import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PermissionsDenied = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={125} color={'red'} />
      <Text style={styles.warningText}>No permissions granted</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  warningText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
  },
})

export default PermissionsDenied
