import * as React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";

const transforms = [
  {
    nome: "super sayajin 1",
    descrição:
      "Goku atingiu o Super Saiyajin 1 quando testemunhou a morte de seu amigo Kuririn nas mãos de Freeza. Essa intensa emoção e raiva despertaram seu poder latente.",
  },
  {
    nome: "super sayajin 2",
    descrição:
      "Goku atingiu o Super Saiyajin 2 durante sua batalha contra Cell, superando seus limites em um intenso treinamento e ao ver Gohan, seu filho, em perigo. Isso despertou um poder ainda maior em seu interior.",
  },
  {
    nome: "super sayajin 3",
    descrição:
      "Goku atingiu o Super Saiyajin 3 durante seu treinamento no Outro Mundo, superando barreiras de poder enquanto se preparava para enfrentar Majin Buu. Essa transformação demanda uma enorme quantidade de energia e resistência.",
  },
];

function Transforms() {
  return (
    <View>
      <Text>transformacões:</Text>
      <FlatList
        data={transforms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { transforms: item })}
          >
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Transforms;
