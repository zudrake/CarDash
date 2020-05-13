import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, Picker } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const addSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});


export default function AddCarForm({ addCar }) {
  const [pickedValue, setPickedValue] = useState("java");

  return (

    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={addSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addCar(values);
        }}
      >
        {props => (
          <View>
            <View>
              <Picker
                pickedValue={pickedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setPickedValue(itemValue)}
              >
                <Picker.Item label="Audi" value="audi" />
                <Picker.Item label="Porsche" value="porsche" />
              </Picker>
            </View>

            {/* TextInput  */}
            {/* <View>

              <TextInput
                style={globalStyles.input}
                placeholder='Car title'
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
              />

              <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

              <TextInput
                style={globalStyles.input}
                multiline minHeight={60}
                placeholder='Car details'
                onChangeText={props.handleChange('body')}
                onBlur={props.handleBlur('body')}
                value={props.values.body}
              />
              <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                onBlur={props.handleBlur('rating')}
                value={props.values.rating}
                keyboardType='numeric'
              />
              <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            </View> */}

            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>

  );
}