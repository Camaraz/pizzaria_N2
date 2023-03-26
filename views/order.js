import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-navigation';
import styles from '../content/style';
import OrderProduct from '../components/orderProduct';
import { useState, useEffect } from 'react';
import { getAllProducts, getFilteredProducts, getAllCategoryForDropDown } from '../services/dbService';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function product({ navigation }) {

    let props = navigation.state.params;

    const [productList, setProducts] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [productsOnCart, setProductsOnCart] = useState([]);

    // Fields to Drop Down
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [category, setCategory] = useState();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(
        () => {
            processUseEffect();

            if (props) {

                for (i in props) {
                    let product = {
                        id: props[i].id,
                        code: props[i].code,
                        description: props[i].description,
                        unitValue: props[i].unitValue,
                        category: props[i].category,
                        categoryId: props[i].categoryId,
                    };

                    setProductsOnCart(oldList => [...oldList, product]);
                }
            }
        }, []
    );

    useEffect(
        () => {
            setCartQuantity(productsOnCart.length);
        }, [productsOnCart]
    );

    async function processUseEffect() {
        await loadProducts(null);
        await loadCategories();
    };

    async function loadProducts(choosedFilter) {
        try {
            if (choosedFilter){
                let list = await getFilteredProducts(choosedFilter);
                setProducts(list);
            } else {
                let list = await getAllProducts();
                setProducts(list);
            }
        } catch (e) {
            Alert.alert(e.toString());
        }
    };

    async function loadCategories() {
        try {
            let list = await getAllCategoryForDropDown();
            setCategoryList(list);

            let defaultValueDdp = {
                label: 'TODOS',
                value: 'TODOS'
            };

            setCategoryList(oldList => [...oldList, defaultValueDdp]);
        } catch (e) {
            Alert.alert('Não foi possível carregar as categorias. Erro: ' + e.toString());
        }
    }

    function addItemToCart(item) {
        setProductsOnCart(oldList => [...oldList, item]);
    };

    function removeItemFromCart(item) {

        let index = productsOnCart.map(function (x) {
            return x.id;
        }).indexOf(item.id);

        if (index > -1) {
            setProductsOnCart([...productsOnCart.slice(0, index), ...productsOnCart.slice(index + 1)]);
        }
    }

    function filterProducts (choosedFilter) {
        choosedFilter = choosedFilter == 'TODOS' ? null : choosedFilter;
        loadProducts(choosedFilter);
    };

    return (
        <View style={styles.container}>

            <View style={{zIndex: 99}}>
                <Text style={[styles.labelInput, styles.addMarginTop]}>Filtrar por:</Text>
                <DropDownPicker
                    style={[styles.dropDownRow, styles.addMarginBottom]}
                    open={categoryOpen}
                    value={category}
                    items={categoryList}
                    setOpen={setCategoryOpen}
                    setItems={setCategoryList}
                    setValue={setCategory}
                    onChangeValue={item => filterProducts(item)}
                    zIndex={10}
                    textStyle={{fontSize:20, textAlign: 'center'}}
                    dropDownContainerStyle={{width: '60%'}}
                    placeholder='TODOS'
                />
            </View>

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
                    <Text style={{ fontSize: 30, marginRight: 5 }}>{cartQuantity ? cartQuantity : 0}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}