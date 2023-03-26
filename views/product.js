import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../content/style';
import Product from '../components/product';
import { Ionicons } from '@expo/vector-icons';
import { createTableProduct, deleteProduct, getAllProducts } from '../services/dbService';

export default function product({ navigation }) {

    const [productList, setProducts] = useState([]);
    let isTableCreated = false;

    useEffect(
        () => {
            processUseEffect();
        }, []
    );

    async function processUseEffect() {
        if (!isTableCreated) {
            isTableCreated = true;
            await createTableProduct();
        }

        await loadProducts();
    }

    async function loadProducts() {
        try {
            let list = await getAllProducts()
            setProducts(list);
        } catch (e) {
            Alert.alert(e.toString());
        }
    }

    function edit(product) {
        navigation.navigate('productEdit', product);
    };

    function exclude(id) {
        Alert.alert('Atenção', 'Deseja excluir este produto?',
            [
                {
                    text: 'Sim',
                    onPress: () => confirmDelete(id),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    };

    async function confirmDelete(id) {
        try {
            await deleteProduct(id);

            Alert.alert('Produto apagado com sucesso!');

            await loadProducts();

        } catch (e) {
            Alert.alert(e);
        }
    };

    return (
        <View style={styles.container}>

            <View style={[styles.addMarginTop, styles.addMarginBottom, styles.containerSV, {alignItems: 'center'}]}>
                <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('category')}>
                    <Text style={styles.textoBotaoMenu}>Categorias</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.containerSV}>
                {
                    productList.map((prod, index) => (
                        <Product product={prod} key={index.toString()}
                            exclude={exclude} edit={edit} />
                    ))
                }
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('productEdit', null)} style={styles.bottomButtonRight} >
                <Ionicons name="add-circle" size={50} />
            </TouchableOpacity>

        </View>
    );
}