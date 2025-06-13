import { useFonts } from 'expo-font';
import { FontLoader } from './src/config/FontConfig';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [loaded, error] = useFonts(FontLoader);

  if (!loaded && !error) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}