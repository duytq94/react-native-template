import {createAppContainer, createStackNavigator} from "react-navigation";
import UserScreen from './User/User.Screen'
import FollowerScreen from './Follower/Follower.Screen'

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
