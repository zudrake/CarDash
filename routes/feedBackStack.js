import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import FeedBack from '../screens/feedBack';
const screens = {
    FeedBack: {
        screen: FeedBack,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='FeedBack' navigation={navigation} />
            }
        },
    },
}

const FeedBackStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default FeedBackStack;