import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, Picker } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import CarData from '../assets/car-makes.json'; //json Data

const getYearList = () => {
  const yearList = [];
  for (let i = 1986; i < 2020; i++) {
    yearList.push(i);
  }
  return yearList;
}

export default function AddCarForm({ addCar }) {
  const cars = CarData;
  const [carList, setPickedValue] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modelList, setModelList] = useState([]);

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

      // console.log(carList);
      // setSelectedCar(0);
      // setModelList(carList[0].models);
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
            <View style={{ borderColor: 'red', borderWidth: 3, borderStyle: 'solid' }} >
              < View style={{ borderColor: 'green', borderWidth: 3, borderStyle: 'solid', }}>
                <View>
                  < Picker onValueChange={handleCarNameChange} selectedValue={selectedCar} >
                    {carList.map((item, index) => (
                      <Picker.Item label={item.name} value={index} key={item.name} />
                    ))}
                  </ Picker>
                </View>
                <View>

                  < Picker title='models' >
                    {modelList.map((item, index) => {
                      return (<Picker.Item label={item.name} value={index} key={item.name} />);
                      //console.log(item.name.models.name)
                    })}
                  </Picker>
                </View>
                {< Picker title="years">
                  {yearList.map((year) => (
                    <Picker.Item label={year} value={year} />
                  ))}
                </Picker>}
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <Button
                  title={'Submit'}
                  onPress={props.handleSubmit}
                  style={{ flex: 1, flexDirection: 'col', justifyContent: 'flex-end' }} ></Button>
              </View>
            </View>
          )}
        </Formik >
      </View >
    );

  }
  return <View>{renderList()}</View>

  // console.log(pickedValue);
  // return (

  //   <View style={globalStyles.container}>
  //     <Formik
  //       initialValues={{ makes: '', model: '', year: '' }}

  //       onSubmit={(values, actions) => {
  //         actions.resetForm();
  //         addCar(values);
  //       }}
  //     >

  //       {props => (
  //         <View style={{
  //           borderColor: 'red', borderWidth: 3, borderStyle: 'solid'
  //         }}>
  //           < View style={{
  //             borderColor: 'green', borderWidth: 5, borderStyle: 'solid',
  //             flexDirection: 'row'
  //           }} >

  //             < Picker
  //               pickedValue={pickedValue}
  //               style={{ width: 120 }}
  //               onValueChange={(itemValue, itemIndex) => setPickedValue(itemValue)}
  //             >
  //               <Picker.Item label="Audi" value="audi" />
  //               <Picker.Item label="Porsche" value="porsche" />
  //               <Picker.Item label="Ford" value="ford" />
  //               <Picker.Item label="Hyundai" value="hyundai" />
  //               <Picker.Item label="Honda" value="honda" />
  //               <Picker.Item label="Nissan" value="nissan" />
  //             </Picker>
  //             {/* Picker Models Here */}
  //             < Picker
  //               pickedValue={pickedValue}
  //               style={{ width: 120 }}
  //               onValueChange={(itemValue, itemIndex) => setPickedValue(itemValue)}
  //             >
  //               <Picker.Item label="1986" value="1986" />
  //               <Picker.Item label="1987" value="1987" />
  //               <Picker.Item label="1988" value="1988" />
  //               <Picker.Item label="1989" value="1989" />
  //               <Picker.Item label="1990" value="1990" />
  //               <Picker.Item label="1991" value="1991" />
  //               <Picker.Item label="1992" value="1992" />
  //               <Picker.Item label="1993" value="1993" />
  //               <Picker.Item label="1994" value="1994" />
  //               <Picker.Item label="1995" value="1995" />
  //               <Picker.Item label="1996" value="1996" />
  //               <Picker.Item label="1997" value="1997" />
  //               <Picker.Item label="1998" value="1998" />
  //               <Picker.Item label="1998" value="1998" />
  //               <Picker.Item label="1999" value="1999" />
  //               <Picker.Item label="2000" value="2000" />
  //               <Picker.Item label="2001" value="2001" />
  //               <Picker.Item label="2002" value="2002" />
  //               <Picker.Item label="2003" value="2003" />
  //               <Picker.Item label="2004" value="2004" />
  //               <Picker.Item label="2005" value="2005" />
  //               <Picker.Item label="2006" value="2006" />
  //               <Picker.Item label="2007" value="2007" />
  //               <Picker.Item label="2008" value="2008" />
  //               <Picker.Item label="2009" value="2009" />
  //               <Picker.Item label="2010" value="2010" />
  //               <Picker.Item label="2011" value="2011" />
  //               <Picker.Item label="2012" value="2012" />
  //               <Picker.Item label="2013" value="2013" />
  //               <Picker.Item label="2014" value="2014" />
  //               <Picker.Item label="2015" value="2015" />
  //               <Picker.Item label="2016" value="2016" />
  //               <Picker.Item label="2017" value="2017" />
  //               <Picker.Item label="2018" value="2018" />
  //               <Picker.Item label="2019" value="2019" />
  //               <Picker.Item label="2020" value="2020" />
  //             </Picker>
  //           </View>
  //           <View>

  //             {/* <FlatButton onPress={props.handleSubmit} text='submit' style={{ flex: 1, flexDirection: 'row' }} /> */}
  //             <Button
  //               onPress={props.handleSubmit}
  //               title='Submit'
  //               style={{ flex: 1, flexDirection: 'col', justifyContent: 'flex-end' }} />
  //           </View>
  //         </View>
  //       )
  //       }
  //     </Formik >



  //   </View >

  // );
}