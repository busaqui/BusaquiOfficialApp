import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home/';
import Notification from '../screens/Notification/';

export default createDrawerNavigator({
    Notification,
    Home
},{
    initialRouteName:'Home',
    defaultNavigationOptions:{
        headerShown: false,
        drawerLockMode: true
    }
});