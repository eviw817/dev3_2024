import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const FavouritesScreen = ({ navigation }) => {
  return (
    <View>
        <View>
            <Text>Your likes</Text>
        </View>

        <ScrollView>
            <View>
                <Text>Je hebt nog niets geliked</Text>
            </View>
        </ScrollView>

        <View>
            <Image source={require('../assets/favourite.svg')}/>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={require('../assets/home.svg')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Shoppingbasket')}>
            <Image
                source={require('../assets/basket.svg')}
            />
            </TouchableOpacity>
      
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5f5f5', // Background color of the entire page
    },
    header: {
      backgroundColor: '#ffffff', // Header background color
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 100,
    },
    icon: {
      width: 50,
      height: 50,
    },
    title: {
      fontSize: 18,
      color: '#333333',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 400,
    },
    item: {
      margin: 20,
      padding: 20,
      flexBasis: '82%',
      aspectRatio: 1,
      backgroundColor: '#ffffff',
    },
    contentText: {
      fontSize: 16,
      color: '#555555',
    },
    footer: {
      padding: 20,
      backgroundColor: '#ffffff', // Footer background color
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    footerText: {
      fontSize: 14,
      color: '#999999',
    },
  });
  

export default FavouritesScreen;

