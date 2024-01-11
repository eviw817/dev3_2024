import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const FlowerItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectFlower(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <Image source={require("../assets/arrow_next.png")} style={styles.icon} />
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 2,
    borderColor: "#30BCED",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 15,
    height: 25,
  },
});
export default FlowerItem;