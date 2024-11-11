import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const handleInput = (value) => {
    if (value === "C") {    
      setInput("0");
    }
    else if (value === "=") {
      try {
        setInput(eval(input).toString()); 
      } catch (error) {
        setInput("Error");
      }
    }
    else if (value === "+/-") {
      setInput((input) => (input.startsWith("-") ? input.slice(1) : "-" + input));
    }
    else if (value === "%") {
      setInput((parseFloat(input) / 100).toString());
    }
    else {
      setInput((input === "0" ? "" : input) + value);
    } 
  };

  // Generate Calculator Buttons
  const generateButton = (label) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => handleInput(label)}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  // Layout Structure
  return (
    <View style={styles.container}>
      
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
      </View>

      <View style={styles.row}>
        {["C", "+/-", "%", "/"].map((label) => generateButton(label))}
      </View>
      <View style={styles.row}>
        {["7", "8", "9", "*"].map((label) => generateButton(label))}
      </View>
      <View style={styles.row}>
        {["4", "5", "6", "-"].map((label) => generateButton(label))}
      </View>
      <View style={styles.row}>
        {["1", "2", "3", "+"].map((label) => generateButton(label))}
      </View>
      <View style={styles.row}>
        {["0", ".", "="].map((label) => generateButton(label))}
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: 'flex-end',
  },
  displayContainer: {
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    color: 'white',
    fontSize: 48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#333',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
  },
});
