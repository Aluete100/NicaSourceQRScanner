import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScanQRScreen from '../screens/qrScan/ScanQRScreen'
import ScannedListScreen from '../screens/scannedList/ScannedList'
import CustomTabBar from '../components/tabBar/CustomTabBar'

export type RootTabParamList = {
  ScanQR: undefined
  ScannedList: undefined
}

const RootTab = createBottomTabNavigator<RootTabParamList>()

const AppNavigation = () => {
  return (
    <RootTab.Navigator
      initialRouteName="ScanQR"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <RootTab.Screen name="ScanQR" component={ScanQRScreen} />
      <RootTab.Screen name="ScannedList" component={ScannedListScreen} />
    </RootTab.Navigator>
  )
}

export default AppNavigation
