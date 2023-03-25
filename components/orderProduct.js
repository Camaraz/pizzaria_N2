import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../content/style';
import orderStyles from '../content/order';
import { Feather } from '@expo/vector-icons';

export default function orderProduct({ product, addToCart, removeFromCart }) {
    return (
        <View style={orderStyles.listItem}>

            <Text style={orderStyles.listItemText}>{product.description}</Text>
            <Text style={orderStyles.listItemText}>R$ {product.unitValue}</Text>


            <View style={[styles.componentRow]}>
                <TouchableOpacity onPress={() => removeFromCart(product.id)} style={orderStyles.listIcon} >
                    <Feather name="minus-circle" size={32} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => addToCart(product.id)} >
                    <Feather name="plus-circle" size={32} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    );
};