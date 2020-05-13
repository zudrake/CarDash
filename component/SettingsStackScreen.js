import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen;