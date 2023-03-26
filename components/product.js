import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../content/style';
import productStyles from '../content/product';

export default function product({ product, exclude, edit }) {
    return (
        <View style={productStyles.listItem} >

            <Text style={productStyles.listItemText}>
                <Text style={{ fontWeight: "bold" }}>Código: </Text>
                {product.code}
            </Text>

            <Text style={productStyles.listItemText}>
                <Text style={{ fontWeight: "bold" }}>Descrição: </Text>
                {product.description}
            </Text>

            <Text style={productStyles.listItemText}>
                <Text style={{ fontWeight: "bold" }}>
                    Preço: </Text>
                {product.unitValue}
            </Text>

            <Text style={productStyles.listItemText}>
                <Text style={{ fontWeight: "bold" }}>Categoria: </Text>
                {product.category}
            </Text>

            <View style={[styles.row, {alignSelf: 'flex-end'}]}>
                <TouchableOpacity onPress={() => edit(product)} style={productStyles.listItemIcon}>
                    <Feather name="edit-2" size={32} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => exclude(product.id)} style={productStyles.listItemIcon}>
                    <Feather name="trash-2" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};