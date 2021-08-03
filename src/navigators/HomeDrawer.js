import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home/index.js';
import LocationBus from '../screens/Home/locationBus.js'

export default createDrawerNavigator({
    Home,
    LocationBus
},{
    initialRouteName:'Home',
    defaultNavigationOptions:{
        headerShown: false
    }
});