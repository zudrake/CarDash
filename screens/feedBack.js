import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

const sendMail = () => {
    MailComposer.composeAsync({
        recipients: ['campsites@nucamp.co'],
        subject: 'Inquiry',
        body: 'To whom it may concern:'
    })
    //this function not working IOS Simulator but work on IOS device.
}
export default function FeedBack() {
    return (
        <View style={globalStyles.container}>
            <Card wrapperStyle={{ margin: 20 }} title='Feed Back' >
                <Text >Developer</Text>
                <Text >Drake Ju</Text>
                <Text />
                <Text >Always Welcome to criticism </Text>
                <Text >Email: zudrake.yh@gmail.com</Text>
                <Button
                    title="Send Email"
                    buttonStyle={{ backgroundColor: 'black', margin: 40 }}
                    icon={<Icon
                        name='envelope-o'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{ marginRight: 10 }}
                    />}
                    onPress={() => sendMail()}
                />
            </Card>
        </View>
    );
}