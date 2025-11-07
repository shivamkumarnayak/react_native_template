import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CustomTheme } from './app/utils/theme';

export default function App() {
  return (
    <PaperProvider theme={CustomTheme}>
    <View style={styles.container}>
      <Text>React Basic Template</Text>
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
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
