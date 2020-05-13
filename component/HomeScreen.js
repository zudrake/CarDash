import React from 'react';
import { Text, View, Button } from 'react-native';

function Home({ navigation }) {
    return (
        <View >
            <View style={{ justifyContent: 'top', alignItems: 'center' }}>
                <Button
                    title="+"
                    onPress={() => AddVehicle()}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Text>Home screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    );
}

export default Home;