import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";

export default function FavouritesScreen() {
  return (
    <View>
      <Card
        image={{ uri: "https://dummyimage.com/200x400" }}
        title="Boldify Hair Thickening..."
        subtitle="Gents Grooming"
        price={2.99}
      />
      <Card
        image={{ uri: "https://dummyimage.com/200x400" }}
        title="Boldify Hair Thickening..."
        subtitle="Gents Grooming"
        price={2.99}
      />
      <Card
        image={{ uri: "https://dummyimage.com/200x400" }}
        title="Boldify Hair Thickening..."
        subtitle="Gents Grooming"
        price={2.99}
      />
    </View>
  );
}
