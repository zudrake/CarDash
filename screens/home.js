import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import AddCarForm from './addCarForm';
import { createAppContainer } from 'react-navigation';
/*
interface ICar {
  id: Number;
  makes: String;
  year: Number;

  currentODO: Number;
  lastRecordedODO: Number;  //currentODO vs lastRecordedOOD
  
  lastOilChanged: Date; // vs Date.now()


  updatedAt: Date;
}
*/
export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [cars, setCars] = useState([
    { makes: '1st Car', ODO: 5000, model: 'Sedan', year: 2020, key: '1' },
    { makes: '2nd Car', ODO: 40000, model: 'Super Car', year: 2020, key: '2' },
    { makes: '3rd Car', ODO: 331231, model: 'Truck  ', year: 2020, key: '3' },
  ]);

  /*
  const shouldOilChange = () => {
    if(Date.now() - lastOilChanged >= Date.(1year) ) {
      return true;
    }

    if(ODO - lastODO > 10000) {
      return true;
    }

    return false;
  }
  */



  const createCar = (car) => {
    return {
      makes: car.makes,
      ODO: 0,
      model: car.model,
      year: car.year,
      key: Math.random().toString()
    };
  }

  const handleAddCar = (newCar) => {
    // cars.key = Math.random().toString();
    // setCars((currentCars) => {
    //   return [newCar, ...currentCars];
    // });

    const initializedCar = createCar(newCar);
    const newList = [...cars, initializedCar];

    setCars(newList);
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
            <AddCarForm onSubmit={handleAddCar} />
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
            <Text style={globalStyles.titleText}>
              {item.model}

            </Text>
            <Text title='ODO'>ODO : {item.ODO}</Text>
            <Text title='Year'>Year : {item.year}</Text>

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
    marginTop: 40,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});