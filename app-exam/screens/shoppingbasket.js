import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from 'react-native';

const ShoppingbasketScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <ScrollView style={styles.content}>
            <View>
                <Text style={styles.item}>Je hebt nog niets toegevoegd aan je winkelmand.</Text>
            </View>
        </ScrollView>

      <View style={styles.footer}>
        
        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate('Likes')}>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
          <Text style={styles.footerText}>Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>

        <View style={styles.footerContent}>
          <Image source={require('../assets/shopping_basket.png')} style={styles.icon} />
          <Text style={styles.footerText}>Basket</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#daedcb', // Background color of the entire page
  },
  icon: {
    width: 50,
    height: 50,
  },
  footer: {
    padding: 20,
    backgroundColor: '#ffffff', // Footer background color
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerText: {
    paddingLeft: 3,
    alignContent: 'center',
    fontSize: 16,
    color: '#30BCED',
  },
});

export default ShoppingbasketScreen;

