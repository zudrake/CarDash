import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Card wrapperStyle={{ margin: 20 }} title='Why I made this App' >
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Hi there,</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>This is my story that why I made this App</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>I have 2014 Hyundai Azera.</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>It's realy nice car,</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>but not as much smart enough</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>I always forgot the timing of changing ENGINE OIL</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>My mechanic said "if you forgot again this engine might not work soon"</Text>
        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Blah Blah</Text>

      </Card>
    </View>
  );
}