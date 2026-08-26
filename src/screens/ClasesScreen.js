import {view, Text, TextInput, FlatList, ScrollView,StyleSheet} from 'react-native';
import {usesafeAreaInsets} from 'react-native-safe-area-context';
import react from 'react';
import Card from '../components/Card';
import NivelFiltro from '../components/NivelFiltro';
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
                <Icon name="search" size={20} />
                <TextInput placeholder="Buscar clase" 
                value={nivel}
                onchangeText={setBusqueda}
                autoCorrect={false}
                autoComplete='false'
                />
                
                {busqueda.length>0 && (
                    <Ionicons name="close-circle" 
                    size={20} 
                    onPress={() => setBusqueda('')}/>
                )}
                </view>
                <ScrollView
                style={ { flexGrow: 0 } }
                >
                //repasar el metodo .map en js
                {NIVELES.map((item)=>(
                    <NivelFiltro 
                    etiqueta={item.nombre}
                    activo={nivel===item.valor}
                    onPress={()=>setNivel(item.valor)} 
                    />
                    ))
                    
                }
                </ScrollView>
            </view>
        </view>

    )
}

//Algunas funciones los hooks 