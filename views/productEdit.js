import { Text, View, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native';
import styles from '../content/style';
import { useState, useEffect } from 'react';
import { editProduct, getAllCategoryForDropDown, newProduct } from '../services/dbService';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";

export default function product({ navigation }) {

    let props = navigation.state.params;

    const [id, setId] = useState();
    const [code, setCode] = useState();
    const [description, setDescription] = useState();
    const [unitValue, setUnitValue] = useState();

    // Fields to Drop Down
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [category, setCategory] = useState();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(
        () => {
            loadCategories();
            loadProduct();
        }, []
    );

    async function loadProduct() {
        if (props) {
            setId(props.id);
            setCode(props.code.toString());
            setDescription(props.description);
            setUnitValue(props.unitValue.toString());
            setCategory(props.categoryId);
        }
    };

    async function loadCategories() {
        try {
            let list = await getAllCategoryForDropDown();
            setCategoryList(list);
        } catch (e) {

        }
    }

    function save() {
        if (!validateProduct()) {
            return;
        } else {
            let product = {
                id: id,
                code: code,
                description: description,
                unitValue: unitValue.replace(',', '.'),
                category: category
            };

            let result = false;
            if (product.id) {
                result = editProduct(product);
            } else {
                result = newProduct(product);
            }

            if (result){
                navigation.navigate('product');
            } else {
                Alert.alert('Não foi possível salvar esse produto.');
            }
        }
    };

    function validateProduct() {

        if (!code || !/^\d+$/.test(code)) {
            Alert.alert('Preencha o código com apenas números!');
            return false;
        }

        if (!description) {
            Alert.alert('Preencha a descrição do produto!');
            return false;
        }

        if (!unitValue) {
            Alert.alert("Preencha o valor unitário!");
            return false;
        }

        if (!category) {
            Alert.alert("Preencha o campo categoria!");
            return false;
        }

        return true;
    };

    function closeKeyBoard() {
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerSV}>

                <Text style={styles.labelInput}>Código</Text>
                <TextInput onChangeText={(text) => setCode(text)} value={code} style={styles.inputText2}></TextInput>

                <Text style={styles.labelInput}>Descrição</Text>
                <TextInput onChangeText={(text) => setDescription(text)} value={description} style={styles.inputText2}></TextInput>

                <Text style={styles.labelInput}>Preço Unitário</Text>
                <TextInput onChangeText={(text) => setUnitValue(text)} value={unitValue} style={styles.inputText2}></TextInput>

                <Text style={styles.labelInput}>Categoria</Text>

                <DropDownPicker
                    style={[styles.dropDown, styles.addMarginBottom]}
                    open={categoryOpen}
                    value={category}
                    items={categoryList}
                    setOpen={setCategoryOpen}
                    setItems={setCategoryList}
                    setValue={setCategory}
                    placeholder='Selecione'
                    onOpen={closeKeyBoard}
                    textStyle={{fontSize:20, textAlign: 'center'}}
                />

            </View>

            <TouchableOpacity onPress={() => save()} style={styles.botaoMenu} >
                <Text style={styles.labelBotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('product')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>

        </View>
    );
}