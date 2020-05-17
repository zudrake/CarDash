import React from 'react';
import { View, Text, Linking } from 'react-native';
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
                <View style={{ textAlign: 'center' }}>

                    <Text style={{ textAlign: 'center' }}>Developer🧑🏻‍💻</Text>
                    <Text />
                    <Text style={{ textAlign: 'center' }}>[Drake Ju]</Text>
                    <Text />
                    <Text style={{ textAlign: 'center' }}>zudrake.yh@gmail.com</Text>
                    <Text />
                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Cochin' }}>Always welcome to Criticism </Text>
                    <Text />

                    <Button
                        title="Send Email"
                        buttonStyle={{ backgroundColor: 'black', margin: 10 }}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => sendMail()}
                    />
                    <Button
                        title="Github"
                        buttonStyle={{ backgroundColor: 'black', margin: 10 }}
                        icon={<Icon
                            name='github'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => { Linking.openURL('https://www.github.com/zudrake') }}
                    />
                </View>
            </Card>
        </View>
    );
}