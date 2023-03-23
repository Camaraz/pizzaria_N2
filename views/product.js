import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../content/style';
import Product from '../components/product';

import { createTableProduct, deleteProduct, editProduct, getAllProducts, newProduct } from '../services/dbService';

export default function product({ navigation }) {

    const [productList, setProducts] = useState([]);
    let isTableCreated = false;

    useEffect(
        () => {
            console.log('Inicializando a tela');
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
        console.log(id);
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
    }

    return (
        <View style={styles.container}>

            <View style={styles.row}>

                <TouchableOpacity style={styles.twoButtonRow} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.textoBotaoMenu}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.twoButtonRow} onPress={() => navigation.navigate('productEdit', null)}>
                    <Text style={styles.textoBotaoMenu}>Novo</Text>
                </TouchableOpacity>

            </View>

            <ScrollView>
                {
                    productList.map((prod, index) => (
                        <Product product={prod} key={index.toString()}
                            exclude={exclude} edit={edit} />
                    ))
                }
            </ScrollView>

        </View>
    );
}