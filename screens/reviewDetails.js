import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('makes')}
        </Text>
        <Text>{navigation.getParam('model')}</Text>
        <View style={styles.cardBody}>
          <Text>Need to change Oil</Text>
          <View style={styles.graph}>

            <Text>Graph!!!!!!!!!!</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  graph: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});