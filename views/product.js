import {Text, View, TouchableOpacity } from 'react-native';
import styles from '../content/style';

export default function product({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Produtos</Text>

            <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('productEdit')}>
                <Text style={styles.textoBotaoMenu}>Novo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('home')}>
                <Text style={styles.textoBotaoMenu}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}