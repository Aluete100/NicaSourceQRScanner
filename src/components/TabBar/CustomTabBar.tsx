import { Ionicons } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const CustomTabBar = (props: BottomTabBarProps) => {
  const { state, navigation } = props

  const onPress = (isFocused: boolean, routeName: string) => {
    if (!isFocused) {
      navigation.navigate(routeName)
    }
  }

  const getIcon = (routeName: string) => {
    switch (routeName) {
      case 'ScanQR':
        return 'qr-code-outline'
      case 'ScannedList':
        return 'list-outline'
    }
  }

  const getLabel = (routeName: string) => {
    switch (routeName) {
      case 'ScanQR':
        return 'QR Scanner'
      case 'ScannedList':
        return 'Scan Results'
    }
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index
        const routeName = route.name

        return (
          <TouchableOpacity
            style={styles.tabBarItemContainer}
            key={route.name}
            onPress={() => onPress(isFocused, route.name)}
          >
            <Ionicons
              name={getIcon(routeName)}
              size={32}
              color={isFocused ? colors.tabBarFocused : colors.tabBarUnfocused}
            />
            <Text style={{ color: isFocused ? colors.tabBarFocused : colors.tabBarUnfocused }}>
              {getLabel(routeName)}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 20,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
  },
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default CustomTabBar
