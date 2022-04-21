import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a BellRD</Text>
      <StatusBar style="auto" />
      <View>
       <Login/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
