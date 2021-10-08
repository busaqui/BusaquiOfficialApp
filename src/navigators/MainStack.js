import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//ÁREA DE IMPORTAÇÀO DAS TELAS
import Preload from '../screens/Preload';
// import Login from '../screens/Login';
import SignIn from '../screens/TemporarySignIn';
import SignUp from '../screens/TemporarySignUp';
import HomeDrawer from './HomeDrawer';
import LocationBus from '../screens/Home/locationBus.js';
import Notification from '../screens/Notification/';

//ÁREA DE SEQUÊNCIA DE "CHAMADA" DAS TELAS
export default createAppContainer(createStackNavigator({
    Preload,
    SignIn,
    SignUp,
    HomeDrawer,
    LocationBus,
    Notification
},{
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        headerShown: false
    }
}));