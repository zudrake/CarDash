import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import AddCarForm from './addCarForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [cars, setCars] = useState([
    { title: '1st Car', ODO: 5000, body: 'lorem ipsum', key: '1' },
    { title: '2nd Car', ODO: 40000, body: 'lorem ipsum', key: '2' },
    { title: '3rd Car', ODO: 331231, body: 'lorem ipsum', key: '3' },
  ]);

  const addCar = (newCar) => {
    cars.key = Math.random().toString();
    setCars((currentCars) => {
      return [newCar, ...currentCars];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <AddCarForm addCar={addCar} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList data={cars} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});