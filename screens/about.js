import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <ScrollView style={globalStyles.container}>
      <Card wrapperStyle={{ margin: 20 }} title='Why I made this App' >
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Hi there,
          {"\n"}
          {"\n"}
          This is my story about why I made this App.
          {"\n"}
          {"\n"}
          I don’t know why, but I always forget to change the engine oil.
          {"\n"}
          {"\n"}
          Usually when you send the car to a mechanic center,
          {"\n"}
          {"\n"}
          they put a sticker on your front window that shows when to come back to change the oil.
          {"\n"}
          {"\n"}
          The sticker has information about returning when your car reaches a certain number of miles or a date.
          {"\n"}
          {"\n"}
          One time, I changed the oil by myself and I forgot to change the sticker,           {"\n"}
          {"\n"}
          so I didn’t know when my next oil change should take place.
          {"\n"}
          {"\n"}
          So here I am. According to my car’s owner manual, my engine oil needs to be changed every 10,000 miles or once a year.
          {"\n"}
          {"\n"}
          So this app is going to have an alert when the car goes over 10,000 miles or a year has passed.
          {"\n"}{"\n"}
          Thanks!
        </Text>

      </Card>
    </ScrollView>
  );
}