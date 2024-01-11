import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from 'react-native';

const InformationScreen = ({ navigation, route }) => {

    const [liked, setLiked] = useState(false);
    const [flower, setFlower] = useState(
        {
            "title": "Daffodil",
            "pictures": [
                "https://craft-exam.ddev.site/assets/Whitedaffodil.jpg",
                "https://craft-exam.ddev.site/assets/Orangedaffodil.jpg",
                "https://craft-exam.ddev.site/assets/Yellowdaffodil.jpg"
            ],
            "colors": [
                {
                    "name": "White",
                    "hex": "#ffffff"
                },
                {
                    "name": "Orange",
                    "hex": "#ff7a29"
                },
                {
                    "name": "Yellow",
                    "hex": "#fad02e"
                }
            ],
            "leaves": true,
            "price": "€3.50",
            "info": "Daffodils go by many names depending on the species and variety — narcissus, jonquils, or paperwhites — but they are all daffodils and they all belong to the genus Narcissus. These iconic flowers are perennial bulbs that are very easy to grow. They will multiply every year in the garden as long as they have good soil with adequate drainage. They are deer resistant and possess a natural pesticide, so few insects bother them other than for pollination. Daffodils are the national flower of Wales and the 10th anniversary posy.",
            "bloomingSeason": [
                {
                    "label": "Spring",
                    "value": "spring",
                    "selected": true,
                    "valid": true
                }
            ],
            "slug": "daffodil",
            "id": 49
        },
    )

    return (

        <View style={styles.container}>

            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.h1}>{flower.title}</Text>
                    <Text style={styles.h3}>{flower.price}</Text>
                    <Text style={styles.h4}>Information</Text>
                    <Text style={styles.bodyText}>{flower.info}</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => setLiked(!liked)}>
                    <View style={styles.footerContent}>
                        <Image source={(liked) ? require('../assets/heart.png') : require('../assets/empty_heart.png')} style={styles.icon}/>
                        <Text style={styles.footerText}>Add to Likes</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.footerContent}>
                    <Image source={require('../assets/empty_basket.png')} style={styles.icon} />
                    <Text style={styles.footerText}>Add to Basket</Text>
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
    content: {
        padding: 20,
    },
    h1: {
        fontSize: 46,
        fontWeight: 'bold',
        color: '#30BCED',
    },
    h3: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F75590',
    },
    h4: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#EF8A17',
    },
    bodyText: {
        fontSize: 18,
    },
    icon: {
        width: 40,
        height: 40,
    },
    footer: {
        padding: 20,
        backgroundColor: '#ffffff', // Footer background color
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    footerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        paddingLeft: 3,
        alignContent: 'center',
        fontSize: 16,
        color: '#30BCED',
    },
});

export default InformationScreen;

