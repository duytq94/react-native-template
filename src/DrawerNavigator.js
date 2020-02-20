import {createDrawerNavigator} from '@react-navigation/drawer'
import ProfileScreen from "./Profile/Profile.Screen"
import FollowerScreen from "./Follower/Follower.Screen"
import React from "react"

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{drawerLabel: 'Profile'}}
            />
            <Drawer.Screen
                name="FollowerScreen"
                component={FollowerScreen}
                options={{drawerLabel: 'Follower'}}
            />
        </Drawer.Navigator>
    )
}
