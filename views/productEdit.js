import {Text, View, TouchableOpacity } from 'react-native';
import styles from '../content/style';

export default function product({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Produto</Text>

            <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('product')}>
                <Text style={styles.textoBotaoMenu}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}