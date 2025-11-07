import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTheme, styles as themeStyles } from './app/utils/theme';
import { Provider as PaperProvider, Button, } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={CustomTheme}>
      <View style={styles.container}>
        <Text>React Basic Template</Text>
        <Button style={themeStyles.button} mode="contained">
          Primary Button
        </Button>
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
