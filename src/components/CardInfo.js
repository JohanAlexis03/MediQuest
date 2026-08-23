import react from 'react';
import { View, Text, StyleSheet } from 'react-native';  // importación de componentes de React Native
import { colors, spacing, typography } from '../theme';// importación de colores, espaciado y tipografía desde el archivo de tema
import { CLASES } from '../data/clases'; // importación de datos de clases desde el archivo de datos

export default function CardInfo({ clase }) { // definición del componente EtiquetaNivel que recibe una prop "nivel"
    return (
        <View style={styles.container}>
            {/* contenedor principal */}
            <Text style={styles.text}>{clase.precio}</Text>
            {/* muestra el precio recibido como prop */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {},
});