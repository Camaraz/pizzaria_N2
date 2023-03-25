import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-navigation';
import styles from '../content/style';
import OrderProduct from '../components/orderProduct';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/dbService';
import { Ionicons } from '@expo/vector-icons';

export default function product({ navigation }) {

    let props = navigation.state.params;

    const [productList, setProducts] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [productsOnCart, setProductsOnCart] = useState([]);

    useEffect(
        () => {
            processUseEffect();
        }, []
    );

    useEffect(
        () => {
            // receive an array when coming back from cart
            if (props) {
                console.log('retornou a tela de pedido');
                setProductsOnCart(props);
                console.log(productsOnCart);
                setCartQuantity(productsOnCart.length);
                console.log(productsOnCart.length);
            } else {
                setCartQuantity(productsOnCart.length);
                console.log(productsOnCart.length);
            }
        }, [productsOnCart]
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

    function addItemToCart(item) {
        setProductsOnCart(oldList => [...oldList, item]);
    };

    function removeItemFromCart(item) {
        let index = productsOnCart.indexOf(item);

        if (index > -1) {
            setProductsOnCart([...productsOnCart.slice(0, index), ...productsOnCart.slice(index + 1)]);
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.containerSV}>
                {
                    productList.map((prod, index) => (
                        <OrderProduct product={prod} key={index.toString()}
                            addToCart={addItemToCart} removeFromCart={removeItemFromCart} />
                    ))
                }
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cart', productsOnCart)} style={styles.bottomButtonRight} >
                <View style={styles.row}>
                    <Ionicons name="cart" size={50} />
                    <Text style={{ fontSize: 20, marginRight: 5 }}>{cartQuantity ? cartQuantity : 0}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}