import React, { useState } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Keyboard, TextInput, TouchableHighlight } from 'react-native';
import { Button, Input, Text, Divider } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';
import moment from "moment";

const ReviewModal = ({ isVisible, onSubmit, onClose }) => {
    const [odo, setOdo] = useState(0);


    const handleSubmit = () => {
        const todayMoment = moment();
        console.log('testttttt' + todayMoment)
        onSubmit(odo, todayMoment);
    }

    return (
        <Modal visible={isVisible} animationType='fade'>
            <View >
                <MaterialIcons
                    name='close'
                    size={24}
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    onPress={onClose}
                />
                <View >
                    <Text h3 style={{ marginVertical: 20 }}>First initial ODO </Text>
                    <Input
                        placeholder="Number Only "
                        leftIcon={{ type: 'font-awesome', name: 'tachometer' }}
                        onChangeText={val => setOdo(val)}
                    />
                </View>
                <Button onPress={handleSubmit} title='Submit' />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#fff",

        justifyContent: 'center',
        marginVertical: 10,
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 40,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});
export default ReviewModal;