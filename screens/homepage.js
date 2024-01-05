import React, { } from 'react';
import {Svg, Circle, Rect} from 'react-native-svg';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    <View style={styles.container}>

        <View style={styles.header}>
            
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
    
            </TouchableOpacity>

            <View>
            
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Shoppingbasket')}>
            
            </TouchableOpacity>

        </View>
    </View>

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffefe',
    },
    header: {
        backgroundColor: '#f7c389',
    },
    footer: {
        backgroundColor: '#fffefe',
    },

});

export default HomeScreen;
