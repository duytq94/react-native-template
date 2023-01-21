import {AppDrawer} from './AppDrawer';
import DetailProfileScreen from '../DetailProfile/DetailProfile.Screen';
import DetailFollowerScreen from '../DetailFollower/DetailFollower.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';

const Stack = createNativeStackNavigator();

export class AppStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={AppDrawer} />
        <Stack.Screen
          name="DetailProfileScreen"
          component={DetailProfileScreen}
        />
        <Stack.Screen
          name="DetailFollowerScreen"
          component={DetailFollowerScreen}
        />
      </Stack.Navigator>
    );
  }
}
