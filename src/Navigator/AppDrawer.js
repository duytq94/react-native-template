import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Profile/Profile.Screen';
import FollowerScreen from '../Follower/Follower.Screen';
import React, {Component} from 'react';
import colors from '../Themes/Colors';
import {fontFamily, fontSize} from '../const';

const Drawer = createDrawerNavigator();

export class AppDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'rgba(118,180,189,0.3)',
          drawerLabelStyle: {
            fontSize: fontSize.medium,
            fontFamily: fontFamily.regular,
            color: colors.primary,
            marginLeft: 12,
          },
        }}
        initialRouteName={'ProfileScreen'}>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="FollowerScreen" component={FollowerScreen} />
      </Drawer.Navigator>
    );
  }
}
