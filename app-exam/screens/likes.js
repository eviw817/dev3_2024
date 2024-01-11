import React, { useState, useEffect } from "react";
import HeartSvg from "../components/Svgs/heartSvg";
import HomeSvg from "../components/Svgs/homeSvg";
import BasketSvg from "../components/Svgs/basketSvg";
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet, } from "react-native";

const LikesScreen = ({ navigation }) => {

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
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <HeartSvg height="45" width="40" filled={true} strokeWidth="100"></HeartSvg>
          <Text style={styles.footerText}>Likes</Text>
        </View>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate("Home")}>
          <HomeSvg height="45" width="40" strokeWidth="100"></HomeSvg>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate("Shopping Basket")}>
          <BasketSvg height="45" width="40" filled={true} strokeWidth="100"></BasketSvg>
          <Text style={styles.footerText}>Basket</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#daedcb", // Background color of the entire page
  },
  content: {
    margin: 20,
    borderWidth: 2,
    borderColor: "#EF8A17",
    borderRadius: 8,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#30BCED",
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F75590",
  },
  bodyText: {
    fontSize: 18,
  },
  icon: {
    width: 50,
    height: 50,
  },
  footer: {
    padding: 20,
    backgroundColor: "#fef3f7",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  footerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    paddingLeft: 3,
    alignContent: "center",
    fontSize: 16,
    color: "#30BCED",
  },
});

export default LikesScreen;

