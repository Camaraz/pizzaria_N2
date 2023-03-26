import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import styles from '../content/style';
import Cart from '../components/cart';
export default function cart({ navigation }) {

    let props = navigation.state.params;

    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        calculeTotalValue();

        if (props) {

            for (i in props) {
                let product = {
                    id: props[i].id,
                    code: props[i].code,
                    description: props[i].description,
                    unitValue: props[i].unitValue,
                    category: props[i].category,
                    categoryId: props[i].categoryId
                };

                setProductList(oldList => [...oldList, product]);
            }
        }

    }, []);

    function calculeTotalValue() {
        let totalInCart = 0;

        for (i in props) {
            totalInCart = totalInCart + parseFloat(props[i].unitValue);
        }

        setTotal(totalInCart.toFixed(2).toString());
    };

    function finalizeOrder() {
        console.log('Finalizando pedido');
    };


    return (
        <View style={styles.container}>

            <Text>CARRINHO</Text>

            <ScrollView style={styles.containerSV}>
                {
                    productList.map((prod, index) => (
                        <Cart product={prod} key={index.toString()} />
                    ))
                }
            </ScrollView>

            <Text style={styles.labelInput}>Total: R$ {total}</Text>

            <TouchableOpacity style={styles.botaoMenu}>
                <Text style={styles.labelBotao} onPress={() => finalizeOrder()}>Finalizar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('order', productList)} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>
        </View>
    );
}