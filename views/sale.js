import { Alert, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../content/style';
import saleStyles from '../content/sale';
import { Ionicons } from '@expo/vector-icons';
import { getAllOrders } from '../services/dbService';
import { useEffect, useState } from 'react';
import Sale from '../components/sale';

export default function sale({ navigation }) {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        processUseEffect();
    }, []);

    async function processUseEffect() {
        let list = await getAllOrders();

        let orders = groupItensByOrder(list);

        setOrderList(orders);
    };

    function groupItensByOrder(list) {
        let orders = [];

        for (i in list) {

            let index = orders.findIndex(e => e.id == list[i].id);

            let productItem = {
                product: list[i].product,
                productQty: list[i].productQty,
                productUnitValue: list[i].productUnitValue
            };

            if (index > -1) {
                orders[index].productList.push(productItem);
            } else {
                let order = {
                    id: list[i].id,
                    date: formatDate(list[i].date),
                    customer: list[i].user,
                    productList: [productItem]
                };

                orders.push(order);
            }
        }

        return orders;
    };

    function formatDate(date) {
        var datePart = date.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + year;
    };

    return (
        <View style={styles.container}>

            <View style={styles.titulo}>
                <Text style={styles.titulo}>Vendas</Text>
            </View>

            <ScrollView style={styles.containerSV}>
                {
                    orderList.map((order, index) => (
                        <Sale order={order} key={index.toString()} />
                    ))
                }
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>

        </View>
    );
}