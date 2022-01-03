import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card(props: {
  title: String;
  subtitle: String;
  image: any;
  price: number;
}) {
  return (
    <View style={styles.card}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {props.title.length > 20
            ? props.title.substring(0, 20) + "..."
            : props.title}
        </Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </View>
          <View style={[styles.button, , { backgroundColor: "#f0ae00" }]}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </View>
        </View>
      </View>
      <View style={styles.sidebar}>
        <Text style={styles.pricing}>£{props.price}</Text>
        <MaterialIcons size={30} name="delete-outline" color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {},
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#f47700",
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
  },
  sidebar: {
    justifyContent: "center",
    alignItems: "center",
  },
  pricing: {
    marginBottom: 40,
    fontSize: 16,
    fontWeight: "800",
  },
});
