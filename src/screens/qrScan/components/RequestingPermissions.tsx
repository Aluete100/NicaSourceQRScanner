import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

const RequestingPermissions = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'red'} />
      <Text style={styles.headerText}>Requesting permissions</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
  },
})

export default RequestingPermissions
