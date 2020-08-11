import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: "purple",
    height: 40,
    fontSize: 16,
  },
});

export const XPButton: React.FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, props.style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default XPButton;
