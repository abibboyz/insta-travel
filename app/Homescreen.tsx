// app/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Authentication/login'; // Ensure this path is correct

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LoginScreen navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
});

export default HomeScreen;
