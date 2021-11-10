import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, TextInput, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { colors } from '../../constants/colors'
import { RootState } from '../../store/store'
import EmptyList from './components/EmptyList'
import ScannerListItem from './components/ScannedListItem'

interface ScannedListScreenProps {
  navigation: any //TODO: Add type
}

const ScannedListScreen = (props: ScannedListScreenProps) => {
  const { scannedQRs } = useSelector((state: RootState) => state.qr)

  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredData, setFiltererData] = useState<string[]>(scannedQRs)

  useEffect(() => {
    if (searchValue !== '') {
      const filteredData = scannedQRs.filter((scannedQR) => scannedQR.toLowerCase().includes(searchValue.toLowerCase()))
      setFiltererData(filteredData)
    } else {
      setFiltererData(scannedQRs)
    }
  }, [searchValue])

  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/listBg.jpeg')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.textInputContainer}>
          {scannedQRs.length > 0 && (
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              value={searchValue}
              onChangeText={(value) => setSearchValue(value)}
            />
          )}
        </View>
        <FlatList
          style={styles.listContainer}
          keyExtractor={(item, idex) => `ScannedItem: ${item + idex}`}
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={({ item }) => <ScannerListItem scannedItem={item} />}
          ListEmptyComponent={<EmptyList navigation={props.navigation} />}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    margin: 20,
    borderRadius: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
})

export default ScannedListScreen
