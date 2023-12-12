import { ActivityIndicator } from "react-native";
import Categories from "./screens/Categories";
import { useFonts } from "expo-font";
import ProductsByCategory from './screens/ProductsByCategory'
import ProductDetail from './screens/ProductDetail'
import { useState } from "react";

export default function App() {

  /* Variable que almacenará la categoría seleccionada para poder navegar entre screens */

  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)


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

  /* Función que recibirá la categoria por parámetro y la asignará a la variable categorySelected */

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  /* Función del boton "returnHomeHandlerEvent" seteará la categoria como vacia */
  
  const onReturnHome = () => {
    setCategorySelected("")
  }

  /* Función que recibe el ID de producto con fines de cuando hagamos un "tap" en un producto, poder ver sus detalles */

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }
  
  /* Operador ternario: Defino una condición y evaluo las diferentes "screens" en base a las necesidades */
  
  return (
    <>
    {
      productIdSelected
      ?
      <ProductDetail productId={productIdSelected}/>
      :
      categorySelected
      ?
      <ProductsByCategory category={categorySelected} returnHomeHandlerEvent={onReturnHome} onSelectProductIdEvent={onSelectProductId} />
      :
      <Categories onSelectedCategoryEvent={onSelectCategory} />
    }
    </>
  );
}
