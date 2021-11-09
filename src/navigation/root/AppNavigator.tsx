import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScanQRScreen from '../../screens/ScanQRScreen'
import ScannedListScreen from '../../screens/ScannedList'
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
            <RootTab.Navigator initialRouteName="ScanQR" tabBar={(props) => <CustomTabBar {...props} />}>
                <RootTab.Screen
                    name="ScanQR"
                    component={ScanQRScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <RootTab.Screen
                    name="ScannedList"
                    component={ScannedListScreen}
                    options={{
                        headerShown: false,
                        // unmountOnBlur: true
                    }}
                />
            </RootTab.Navigator>
        </Provider>
    )
}

export default AppNavigation
