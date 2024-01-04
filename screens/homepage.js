import React, {} from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

<View style={styles.container}>

    <View style={styles.header}>
        <Image source={require('../assets/logo.svg')} />
    </View>

    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
            <Image source={require('../assets/favourite.svg')}/>
        </TouchableOpacity>

        <View>
            <Image source={require('../assets/home.svg')}/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Shoppingbasket')}>
            <Image source={require('../assets/basket.svg')}/>
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
    }

});

export default HomeScreen;

