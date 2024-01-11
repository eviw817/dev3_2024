import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from "react-native";

const LikesScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <ScrollView style={styles.content}>
            <View>
                <Text style={styles.item}>Je hebt nog niets toegevoegd aan je likes.</Text>
            </View>
        </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <Image source={require("../assets/heart.png")} style={styles.icon} />
          <Text style={styles.footerText}>Likes</Text>
        </View>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/home.png")} style={styles.icon} />
          <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.footerContent} onPress={() => navigation.navigate("ShoppingBasket")}>
          <Image source={require("../assets/shopping_basket.png")} style={styles.icon} />
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
  icon: {
    width: 50,
    height: 50,
  },
  footer: {
    padding: 20,
    backgroundColor: "#ffffff", // Footer background color
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

