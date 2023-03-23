import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../content/style';
import { useState, useEffect } from 'react';
import { editProduct, newProduct } from '../services/dbService';

export default function product({ navigation }) {

    let props = navigation.state.params;

    const [id, setId] = useState();
    const [code, setCode] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();

    useEffect(
        () => {
            console.log('Inicializando a tela');
            loadProduct();
        }, []
    );

    async function loadProduct() {
        console.log(props);
        if (props){
            setId(props.id);
            setCode(props.code.toString());
            setDescription(props.description);
            setCategory(props.category);
        }
    };

    function save() {

        let product = {
            id: id,
            code: code,
            description: description,
            category: category
        };

        console.log(product);
        
        if (product.id) {
            console.log('editando');
            let result = editProduct(product);
            console.log(result);
        } else {
            let result = newProduct(product);   
            console.log(result);
        }

        navigation.navigate('product');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.textoBotaoMenu}>Código</Text>
            <TextInput onChangeText={(text) => setCode(text)} value={code} style={styles.inputText}></TextInput>

            <Text style={styles.textoBotaoMenu}>Descrição</Text>
            <TextInput onChangeText={(text) => setDescription(text)} value={description} style={styles.inputText}></TextInput>

            <Text style={styles.textoBotaoMenu}>Categoria</Text>
            <TextInput onChangeText={(text) => setCategory(text)} value={category} style={styles.inputText}></TextInput>

            <View style={styles.row}>
                <TouchableOpacity style={styles.twoButtonRow} onPress={() => navigation.navigate('product')}>
                    <Text style={styles.textoBotaoMenu}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.twoButtonRow} onPress={() => save()}>
                    <Text style={styles.textoBotaoMenu}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}