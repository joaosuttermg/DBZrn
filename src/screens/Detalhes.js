import React from "react";
import { View, Text } from "react-native";

function Details({ route }) {
  const {transforms} = route.params;
  return (
    <View>
      <Text>Nome: {transforms.nome}</Text>
      <Text>descrição: {transforms.descrição}</Text>
    </View>
  );
}

export default Details;
