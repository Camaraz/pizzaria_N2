import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../content/style';
import orderStyles from '../content/order';

export default function orderProduct({ product, addToCart, removeFromCart }) {
    return (
        <View style={orderStyles.listItem}>

            <Text>{product.description}</Text>
            <Text>R$ {product.unitValue}</Text>

            <TouchableOpacity style={orderStyles.roundButton} onPress={() => addToCart(product.id)}>
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={orderStyles.roundButton} onPress={() => removeFromCart(product.id)}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    );
};