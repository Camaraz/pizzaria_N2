import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-navigation';
import styles from '../content/style';
import OrderProduct from '../components/orderProduct';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/dbService';

export default function product({ navigation }) {

    const [productList, setProducts] = useState([]);

    useEffect(
        () => {
            processUseEffect();
        }, []
    );

    async function processUseEffect() {
        await loadProducts();
    };

    async function loadProducts() {
        try {
            let list = await getAllProducts()
            setProducts(list);
        } catch (e) {
            Alert.alert(e.toString());
        }
    };

    function addItemToCart(id){
        console.log('adding to cart');
    };

    function removeItemFromCart(id){
        console.log('removing from cart');
    }

    return (
        <View style={styles.container}>

            <ScrollView>
                {
                    productList.map((prod, index) => (
                        <OrderProduct product={prod} key={index.toString()}
                            addToCart={addItemToCart} removeFromCart={removeItemFromCart} />
                    ))
                }
            </ScrollView>

            <View style={[styles.row, styles.rowButtonBottom]}>

                <TouchableOpacity style={styles.twoButtonRow} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.textoBotaoMenu}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.twoButtonRow} >
                    <Text style={styles.textoBotaoMenu}>Carrinho</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}