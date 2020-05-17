import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Card, Button, Text, Divider } from 'react-native-elements'
import ReviewModal from './reviewModal';
import moment from "moment";


export default function ReviewDetails({ navigation }) {

  const makes = navigation.getParam('makes');
  const model = navigation.getParam('model');
  const year = navigation.getParam('year');
  const odoParam = navigation.getParam('ODO');

  const [odo, setOdo] = useState(odoParam || 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setToggleState] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    if (odo === 0) {
      setIsModalOpen(true);
    }
  }, []);


  const toggleStatus = () => {
    setToggleState({
      status: !status
    });
    console.log('toggle button handler: ' + status);
    shouldOilChange()
  }
  const shouldOilChange = () => {
    // oneYear
    console.log('여기로 들오니?' + moment(currentDate) + '-------------' + moment(setCurrentDate.value))
    if (moment(currentDate).diff(moment(setCurrentDate.value), "year") >= 1) {
      Alert.alert(
        'NEED TO ENGINE OIL CHANGE',
        'It has been 1 year that you did not changed engine oil',
        [
          {
            text: 'OK',
            onPress: () => console.log("OK Pressed"),
            style: "OK"
          }
        ],
        { cancelable: false }
      );
    }
    console.log('----ODOPARAM' + odoParam + '---odo-----' + odo)
    if (Math.abs(odo - odoParam) > 10000) {
      console.log('helloooooooo')
      Alert.alert(
        'NEED TO ENGINE OIL CHANGE',
        "Your car is 10,000 miles running that you hasn't been  changed engine oil",
        [
          {
            text: 'OK',
            onPress: () => console.log("OK Pressed"),
            style: "OK"
          }
        ],
        { cancelable: false }
      );
    }
  }
  const handleReviewModelSubmit = (currentOdo, date) => {
    // console.log({ currentOdo });
    setOdo(currentOdo);
    setCurrentDate(date)
    setIsModalOpen(false);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const renderDate = (date) => {
    console.log(date);
    const stringDate = moment().format("YYYY-MM-DD");
    return (
      <Text>{stringDate}</Text>
    )
  }
  return (
    <View style={globalStyles.container}>
      <ReviewModal isVisible={isModalOpen} onSubmit={handleReviewModelSubmit} onClose={handleModalClose} />

      <Card style={styles.card}>
        <Text style={globalStyles.titleText}>
          {makes}
        </Text>
        <Text>Model :{model}</Text>
        <Text>Year  :{year}</Text>
        <View style={styles.cardBody}>
          <View>
            <Text />
            <Divider />
            <Text />
            <Text > Current ODO : {odo}</Text>
            <Text > Last Time input Date : {renderDate(currentDate)}</Text>
            <Divider />
            <Text />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              placeholder='write you ODO'
              keyboardType="number-pad"
              onChangeText={num => setOdo(num)}
              value={odo.toString()}
            />
            <TouchableHighlight >
              <Button title="update ODO" onPress={() => toggleStatus()} style={{ height: 40, borderColor: 'red', borderWidth: 1 }} />
            </TouchableHighlight>
          </View>
        </View>
      </Card>
    </View>
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