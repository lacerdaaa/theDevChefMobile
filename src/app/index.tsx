// App.tsx
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import {
  SourceCodePro_400Regular,
  SourceCodePro_500Medium,
  SourceCodePro_600SemiBold,
} from '@expo-google-fonts/source-code-pro';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Playfair: PlayfairDisplay_400Regular,
    PlayfairMedium: PlayfairDisplay_500Medium,
    PlayfairSemiBold: PlayfairDisplay_600SemiBold,
    PlayfairBold: PlayfairDisplay_700Bold,

    SourceCode: SourceCodePro_400Regular,
    SourceCodeMedium: SourceCodePro_500Medium,
    SourceCodeSemiBold: SourceCodePro_600SemiBold,
  });

  if (!fontsLoaded) return <Text>Carregando fontes...</Text>;

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
