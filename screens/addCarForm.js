import React, { useState, useEffect } from 'react';
import { Button, View, Picker, TextInput } from 'react-native';
import { Formik, Field } from 'formik';
import CarData from '../assets/car-makes.json'; //json Data

const getYearList = () => {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let i = 1986; i <= currentYear; i++) {
    yearList.push(i);
  }
  return yearList;
}

export default function AddCarForm({ onSubmit }) {
  const cars = CarData;
  const [carList, setPickedValue] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  // const [selectedModel, setSelectedModel] = useState(null);
  // const [selectedYear, setYearValue] = useState(null);
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


  const getMakesNameByIndex = (index) => {
    if (!carList) {
      return;
    }

    return carList[index]?.name;
  }

  const renderList = () => {

    return (
      <View >
        <Formik
          initialValues={{ makes: 0, model: undefined, year: 0 }}
          onSubmit={(values, actions) => {

            const translatedFormValues = {
              makes: getMakesNameByIndex(values.makes),
              model: carList[values.makes].models[values.model].name,
              year: values.year
            };

            onSubmit(translatedFormValues);

            actions.resetForm();
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <View  >
              {/* Pickers */}
              < View >
                {/* Picker #1 Car Brand */}
                <View>
                  < Picker onValueChange={(value) => setFieldValue('makes', value)} selectedValue={values.makes} >
                    {carList.map((item, index) => (
                      <Picker.Item label={item.name} value={index} key={index} />
                    ))}
                  </ Picker>
                </View>
                {/* Picker #2 Car Models */}
                <View>
                  < Picker
                    onValueChange={(value) => setFieldValue('model', value)}
                    selectedValue={values.model}
                  >
                    {(carList[values.makes]?.models || []).map((item, index) => {
                      return (<Picker.Item label={item.name} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
                {/* Picker #3 Car Years */}
                {< Picker
                  onValueChange={(value) => setFieldValue('year', value)}
                  selectedValue={values.year}
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
                  onPress={handleSubmit}
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