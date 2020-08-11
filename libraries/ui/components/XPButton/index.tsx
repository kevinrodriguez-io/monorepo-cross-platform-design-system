import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#5B48A2',
    height: 40,
    fontSize: 16
  }
})

export const XPButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Hello, I'm a Button</Text>
    </TouchableOpacity>
  );
};
