import {Text, View, TouchableOpacity } from 'react-native';
import styles from '../content/style';

export default function product({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Pedido</Text>

            <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('home')}>
                <Text style={styles.textoBotaoMenu}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}