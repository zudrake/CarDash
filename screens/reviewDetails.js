import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';
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
    addDate()
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

  // 오늘날자를 입력
  const addDate = () => {
    console.log('addDate() here')
  }

  const renderDate = (date) => {
    console.log(date);
    const stringDate = moment().format("YYYY-MM-DD");
    return (
      <Text>{stringDate}</Text>
    )
  }
  // console.log(navigation.getParam("ODO"))
  return (
    //요기 뷰를 모듈화 해서 위에서도 쓸수있게해야할듯. {const DetailViewList = ()}
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