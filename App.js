import React from 'react';
import AppNavigator from './routes/Navigator';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
 
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>     
    );
}