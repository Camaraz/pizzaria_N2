import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import styles from '../content/style';

export default function cart({ navigation }) {

    let props = navigation.state.params;
    var cart = [];
    const [productList, setProductList] = useState([]);

    useEffect(
        () => {
            cart = props;
        }, []
    );


    return (
        <View style={styles.container}>
            
            <Text>CARRINHO</Text>

            <TouchableOpacity style={styles.botaoMenu}>
                <Text style={styles.labelBotao} onPress={() => console.log(cart)}>Finalizar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('order', cart)} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>
        </View>
    );
}