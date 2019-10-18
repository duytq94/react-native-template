import {createAppContainer} from "react-navigation";
import UserScreen from './User/User.Screen'
import FollowerScreen from './Follower/Follower.Screen'
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
    {
        UserScreen: {screen: UserScreen},
        FollowerScreen: {screen: FollowerScreen}
    },
    {
        initialRouteName: "UserScreen"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
