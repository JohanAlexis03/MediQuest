import react from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import EtiquetaNivel from './EtiquetaNivel';
import { colors, spacing, typography } from '../theme';
import { NIVELES } from '../data/clases';

export default function Card({ clase, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image source={{ uri: clase.imagen }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{clase.titulo}</Text>
                <Text style={styles.description}>{clase.descripcion}</Text>
                <EtiquetaNivel nivel={clase.nivel} />
            </View>
        </Pressable>
    );
}


//repasar manejo de parametro desde un formato tipo json
// librerias para crear estilos 
// usuario de github

//proxima clase subir al repo 
