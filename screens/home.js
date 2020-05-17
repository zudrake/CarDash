import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import AddCarForm from './addCarForm';

// interface ICar {
// id: Number;
// makes: String;
//   year: Number;
//   currentODO: Number;
//   lastRecordedODO: Number;  //currentODO vs lastRecordedOOD
//   lastOilChanged: Date; // vs Date.now()
//   updatedAt: Date;
// }

// const dateBetween = ( lastOilChangedDay) => {
//   let oneYear = 1000 * 60 * 60 * 24 * 365;
//   let toDayMS = new Date.now();
//   let lastOilChangedDay = Date.getTime();
//   let diffMS = toDayMS - lastOilChanged;
//   return Math.abs(diffMS / oneYear);
// }
// if(DateBetwwen >= 1){
// return true;
// }

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [cars, setCars] = useState([
    { makes: 'Audi', ODO: 0, model: 'e-tron', oDoInputDate: '', year: 2018, key: '1' },
    { makes: 'Ferrari', ODO: 40000, model: '488 spider', oDoInputDate: '2018-06-23', year: 2017, key: '2' },
    { makes: 'Mercedes', ODO: 331231, model: 'S400', oDoInputDate: '2019-1-1', year: 2010, key: '3' },
  ]);

  // const shouldOilChange = () => {
  //   const dateBetween = ( lastOilChangedDay) => {
  //   let oneYear = 1000 * 60 * 60 * 24 * 365;
  //   let toDayMS = new Date.now();
  //   let lastOilChangedDay = Date.getTime();
  //   let diffMS = toDayMS - lastOilChanged;
  //   return Math.abs(diffMS / oneYear);
  // }
  // if(DateBetwwen >= 1){
  // return true;
  // }

  //   if (ODO - lastODO > 10000) {
  //     return true;
  //   }
  //   return false;
  // }

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

    const initializedCar = createCar(newCar);
    const newList = [...cars, initializedCar];
    if (initializedCar.ODO === 0) {
      newCar.ODO = 'Need to update'
    }
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
              🚗 {item.makes.toUpperCase()}   {item.model.toUpperCase()}
            </Text>
            <Text title='ODO'>ODO :  {item.ODO}</Text>
            <Text title='Year'>Year :  {item.year}</Text>
            <Text title='updated'>Updated : {item.oDoInputDate}</Text>
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