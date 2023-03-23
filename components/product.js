import {Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../content/style';

// Passou a entidade e dois metodos
export default function product({product, exclude, edit}) {
    return (
        <View style={styles.contato} >

            <Text>Código: {product.code}</Text>
            <Text>Descrição: {product.description}</Text>
            <Text>Preço: {product.unitValue}</Text>
            <Text>Categoria: {product.category}</Text>

            <View style={styles.dadosBotoesAcao}>
                <TouchableOpacity onPress={() => exclude(product.id)}>
                    <Ionicons name="md-remove-circle" size={32} color="red" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => edit(product)}>
                    <Entypo name="edit" size={32} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );
};