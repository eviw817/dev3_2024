import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from 'react-native';

const FavouritesScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <ScrollView style={styles.content}>
            <View>
                <Text style={styles.item}>Je hebt nog niets toegevoegd aan je favorieten.</Text>
            </View>
        </ScrollView>

      <View style={styles.footer}>
        <View>
          <Image source={require('../assets/favourite.png')} style={styles.icon} />
          <Text style={styles.footerText}>Likes</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ShoppingBasket')}>
          <Image source={require('../assets/shopping_basket.png')} style={styles.icon} />
          <Text style={styles.footerText}>Basket</Text>
        </TouchableOpacity>

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
  header: {
    backgroundColor: '#ffffff', // Header background color
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 100,
  },
  name: {
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#F75590',
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },
  flatlist: {
    padding: 20,
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

export default FavouritesScreen;

