import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScanQRScreen from '../../screens/ScanQRScreen'
import ScannedListScreen from '../../screens/ScannedList'
import { Provider } from 'react-redux'
import store from '../../store/store'

export type RootTabParamList = {
    ScanQR: undefined
    ScannedList: undefined
}

const RootTab = createBottomTabNavigator<RootTabParamList>()

const AppNavigation = () => {
    return (
        <Provider store={store}>
            <RootTab.Navigator initialRouteName="ScanQR">
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
