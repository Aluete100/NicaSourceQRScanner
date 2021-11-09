import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScanQRScreen from '../../screens/qrScan/ScanQRScreen'
import ScannedListScreen from '../../screens/scannedList/ScannedList'
import { Provider } from 'react-redux'
import store from '../../store/store'
import CustomTabBar from '../../components/TabBar/CustomTabBar'

export type RootTabParamList = {
    ScanQR: undefined
    ScannedList: undefined
}

const RootTab = createBottomTabNavigator<RootTabParamList>()

const AppNavigation = () => {
    return (
        <Provider store={store}>
            <RootTab.Navigator initialRouteName="ScanQR" screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
            }} tabBar={(props) => <CustomTabBar {...props} />}>
                <RootTab.Screen
                    name="ScanQR"
                    component={ScanQRScreen}
                />
                <RootTab.Screen
                    name="ScannedList"
                    component={ScannedListScreen}
                />
            </RootTab.Navigator>
        </Provider>
    )
}

export default AppNavigation
