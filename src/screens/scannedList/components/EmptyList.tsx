import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../../constants/colors'

interface EmptyListProps {
  navigation: any
}

const EmptyList = (props: EmptyListProps) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Ionicons name="sad-outline" size={125} color={colors.gray} />
      <Text style={styles.titleText}>Uppss, no data found!</Text>
      <TouchableOpacity style={styles.goBackButtonContainer} onPress={() => navigation.navigate('ScanQR')}>
        <Text style={styles.buttonText}>Go to QR Scanner</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.gray,
  },
  goBackButtonContainer: {
    marginTop: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: colors.primaryColor,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
  },
})
