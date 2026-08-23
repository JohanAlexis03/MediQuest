import {view, Text, TextInput, FlatList, ScrollView,StyleSheet} from 'react-native';
import {usesafeAreaInsets} from 'react-native-safe-area-context';
import react from 'react';
import Card from '../components/Card';
import { spacing,colors,typography } from '../theme';
import {CLASES,NIVELES} from '../data/clases';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

export default function ClasesScreen ({navigation}){

    //const {columnas,paddingHorizontal} = useResponsive(); 
    //aca se ponen todos los hooks que se van a usar en la pantalla
    const [nivel,setNivel] = useState("todos");
    return (
        <view>
            <view>
                <Text>Aplicacion de clases de ingles</Text>
                <view>
                <Icon name="search" size={20} /> // aca se pone el icono de busqueda
                <TextInput placeholder="Buscar clase" 
                value={nivel}
                onchangeText={setNivel}
                autoCorrect={false}
                /> // aca se pone el buscador de clases
                </view>
            </view>
        </view>

    )
}

//Algunas funciones los hooks 