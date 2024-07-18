import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.textDecoration}>Insta Travek</Text>
        <StatusBar style="auto" />
        <View style={styles.navigationContainer}>
          <Navigation />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  textDecoration: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  navigationContainer: {
    flex: 1,
    width: '100%',
  },
  
});
