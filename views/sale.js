import { Alert, Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../content/style';
import saleStyles from '../content/sale';

export default function sale({ navigation }) {


    return (
        <View style={styles.container}>

            <Text>Produtos Vendidos</Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.twoButtonRow} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.textoBotaoMenu}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.twoButtonRow} onPress={() => deleteTable()}>
                    <Text style={styles.textoBotaoMenu}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}