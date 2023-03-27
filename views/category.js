import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../content/style';
import Category from '../components/category';
import { Ionicons } from '@expo/vector-icons';
import { createTableCategory, deleteCategory, getAllCategory } from '../services/dbService';

export default function category({ navigation }) {

    const [categoryList, setCategory] = useState([]);
    let isTableCreated = false;

    useEffect(
        () => {
            processUseEffect();
        }, []
    );

    async function processUseEffect() {
        if (!isTableCreated) {
            isTableCreated = true;
            await createTableCategory();
        }

        await loadCategory();
    }

    async function loadCategory() {
        try {
            let list = await getAllCategory()
            setCategory(list);
        } catch (e) {
            Alert.alert(e.toString());
        }
    }

    function edit(category) {
        navigation.navigate('categoryEdit', category);
    };

    function exclude(id) {
        Alert.alert('Atenção', 'Deseja excluir essa categoria? Todos os produtos desta categoria serão deletados também!',
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
            await deleteCategory(id);

            Alert.alert('Categoria apagada com sucesso!');

            await loadCategory();

        } catch (e) {
            Alert.alert(e);
        }
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.titulo}>
                <Text style={styles.titulo}>Categorias</Text>
            </View>

            <ScrollView style={styles.containerSV}> 
                {
                    categoryList.map((prod, index) => (
                        <Category category={prod} key={index.toString()}
                            exclude={exclude} edit={edit} />
                    ))
                }
            </ScrollView>
            
            <TouchableOpacity onPress={() => navigation.navigate('product')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('categoryEdit', null)} style={styles.bottomButtonRight} >
                <Ionicons name="add-circle" size={50} />
            </TouchableOpacity>

        </View>
    );
}