import * as React from "react";
import { View, Text, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text>CATÁLOGO DBZ
      </Text>
      <Button
        title="Transformações"
        onPress={() => navigation.navigate("Transforms")}
      />
    </View>
  );
}

export default Home;
