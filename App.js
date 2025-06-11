import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontLoader } from './src/config/FontConfig';
import { Font } from './src/constants';
import Onboarding from './src/screens/Onboarding';

export default function App() {

  const [loaded, error] = useFonts(FontLoader);

  if (!loaded && !error) return null;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Onboarding onDone={() => console.log('Onboarding completed')} />
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
  txt: {
    fontFamily: Font.regular,
    fontSize: 20,
    color: '#000',
  }
});
