import React, {} from 'react';

import { View, TouchableOpacity, SvgUri, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

<View style={styles.container}>

    <View style={styles.header}>
        <SvgUri
                width="100%"
                height="100%"
                uri="../assets/logo.svg"
            />
    </View>

    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
            <SvgUri
                width="100%"
                height="100%"
                uri="../assets/favourite.svg"
            />
        </TouchableOpacity>

        <View>
            <SvgUri
                width="100%"
                height="100%"
                uri="../assets/home.svg"
            />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Shoppingbasket')}>
            <SvgUri
                width="100%"
                height="100%"
                uri="../assets/basket.svg"
            />
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
