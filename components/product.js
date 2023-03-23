import {Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../content/style';
import productStyles from '../content/product';

// Passou a entidade e dois metodos
export default function product({product, exclude, edit}) {
    return (
        <View style={productStyles.listItem} >

            <Text style={productStyles.listItemText}>Código: {product.code}</Text>
            <Text style={productStyles.listItemText}>Descrição: {product.description}</Text>
            <Text style={productStyles.listItemText}>Preço: {product.unitValue}</Text>
            <Text style={productStyles.listItemText}>Categoria: {product.category}</Text>

            <View style={[styles.row, productStyles.listItemRow]}>
                <TouchableOpacity onPress={() => edit(product)} style={productStyles.listItemIcon}>
                    <Entypo name="edit" size={32} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => exclude(product.id)} style={productStyles.listItemIcon}>
                    <Ionicons name="md-remove-circle" size={32} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};