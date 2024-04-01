import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Text>Francesco Piscani</Text>
        <Text>@fpiscani</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
  userCard: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
  },
});
