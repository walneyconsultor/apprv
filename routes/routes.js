import { createStackNavigator } from 'react-navigation';

import Splash from '../screens/splash';

import Account from '../screens/account';

const AppNavigator = createStackNavigator({

    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash'
        }
    },

    Account: {
        screen: Account,
        navigationOptions:{
            title:  'Account'
        }
    }

}, { headerMode: 'none' })

export default AppNavigator;