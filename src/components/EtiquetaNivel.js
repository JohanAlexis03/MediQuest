import react from 'react';
import { View, Text, StyleSheet } from 'react-native';  // importación de componentes de React Native
import { colors, spacing, typography } from '../theme';// importación de colores, espaciado y tipografía desde el archivo de tema

export default function EtiquetaNivel({ nivel }) { // definición del componente EtiquetaNivel que recibe una prop "nivel"
  return ( //Variable o contenedor que contiene el nivel recibido como prop y lo muestra en un Text
    <View style={styles.container}> {/* contenedor principal */}
      <Text style={styles.text}>{nivel}</Text> {/* muestra el nivel recibido como prop */}
    </View>
  );
}

const styles = StyleSheet.create({ // definición de estilos para el componente
    container: { // estilos para el contenedor principal
        alignSelf: 'flex-start', // alinea el contenedor al inicio del eje principal
        paddingVertical: 3,
        paddingHorizontal: spacing.md, // utiliza el espaciado definido en el archivo de tema
    },
    text: { fontSize: 11, fontWeight: '700', letterSpacing: 0.3}// estilos para el texto que muestra el nivel

});