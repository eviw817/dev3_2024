import React, { useState, useEffect } from "react";
import HeartSvg from "../components/Svgs/heartSvg";
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from "react-native";
import BasketSvg from "../components/Svgs/basketSvg";

const InformationScreen = ({ navigation, route }) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
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
                    <View>
                        <HeartSvg height="45" width="40" filled={liked} strokeWidth="50"></HeartSvg>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSaved(!saved)}>
                    <View>
                        <BasketSvg height="45" width="40" filled={saved} strokeWidth="50"></BasketSvg>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#daedcb",
    },
    content: {
        padding: 20,
    },
    h1: {
        fontSize: 46,
        fontWeight: "bold",
        color: "#30BCED",
    },
    h3: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#F75590",
    },
    h4: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#EF8A17",
    },
    bodyText: {
        fontSize: 18,
    },
    icon: {
        width: 45,
        height: 40,
    },
    footer: {
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#fef3f7",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
});

export default InformationScreen;

