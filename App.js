import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import TabNavigator from "./navigation/TabNavigator";
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  /* Declaración e importación de Google Fonts*/

  const [fontsLoaded] = useFonts({
    'Afacad-Medium': require('./assets/fonts/Afacad-Medium.ttf'),
    'Afacad-Regular': require('./assets/fonts/Afacad-Regular.ttf'),
    'Afacad-SemiBold': require('./assets/fonts/Afacad-SemiBold.ttf')
  });


  /* Condición que corroborá si las fuentes se cargaron bien o no. Si por algun motivo, alguna fuente no se cargó, aparecerá un spinner en la app*/
  
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  
  
  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}
