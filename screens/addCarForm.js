import React, { useState, useEffect } from 'react';
import { Button, View, Picker } from 'react-native';
import { Formik } from 'formik';
import CarData from '../assets/car-makes.json'; //json Data

const getYearList = () => {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let i = 1986; i <= currentYear; i++) {
    yearList.push(i);
  }
  return yearList;
}

export default function AddCarForm({ addCar }) {
  const cars = CarData;
  const [carList, setPickedValue] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setYearValue] = useState(null);
  const yearList = getYearList();

  const fetchList = () => {
    if (cars) {
      setPickedValue(cars);
      setSelectedCar(0);
      setModelList(cars[0].models);
    }
  }
  useEffect(() => {
    if (!carList.length) {
      fetchList();
    }
  }, []);

  const handleCarNameChange = (carIndex) => {
    const currentBrandModelList = carList[carIndex].models;
    setSelectedCar(carIndex);
    setModelList(currentBrandModelList);
  }


  const renderList = () => {

    return (
      <View >
        <Formik
          initialValues={{ makes: '', model: '', year: '' }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addCar(values);
          }}
        >
          {props => (
            <View  >
              {/* Pickers */}
              < View >
                {/* Picker #1 Car Brand */}
                <View>
                  < Picker onValueChange={handleCarNameChange} selectedValue={selectedCar} >
                    {carList.map((item, index) => (
                      <Picker.Item label={item.name} value={index} key={index} />
                    ))}
                  </ Picker>
                </View>
                {/* Picker #2 Car Models */}
                <View>
                  < Picker
                    onValueChange={(itemValue, itemIndex) => setSelectedModel(itemValue)}
                    selectedValue={selectedModel}

                  >
                    {modelList.map((item, index) => {
                      return (<Picker.Item label={item.name} value={index} key={index} />);
                      //console.log(item.name.models.name)
                    })}
                  </Picker>
                </View>
                {/* Picker #3 Car Years */}
                {< Picker
                  onValueChange={(itemValue) => setYearValue(itemValue)}
                  selectedValue={selectedYear}
                >
                  {
                    yearList.map((year) => (
                      <Picker.Item label={year} value={year} key={year} />
                    ))
                  }
                </Picker>}
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <Button
                  title='Submit'
                  onPress={props.handleSubmit}
                  style={{ flex: 1, flexDirection: 'col', justifyContent: 'flex-end' }} />
              </View>
            </View>
          )}
        </Formik >
      </View >
    );

  }
  return <View>{renderList()}</View>
}