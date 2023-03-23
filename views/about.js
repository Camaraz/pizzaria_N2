import { Alert, Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../content/style';
import aboutStyles from '../content/about';
import { deleteTableProduct } from '../services/dbService';

export default function about({ navigation }) {

    function deleteTable() {
        Alert.alert('Atenção', 'Deseja excluir a tabela produto e recomeçar?',
            [
                {
                    text: 'Sim',
                    onPress: () => deleteTableProduct(),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    };

    return (
        <View style={styles.container}>

            <Text></Text>
            <Text style={aboutStyles.texto}>Aplicatio desenvolvido por:</Text>

            <FlatList data={[
                { key: 'Heitor Teruo Shimamura Simizu' },
                { key: 'Rafael Câmara Araújo' }
            ]}
                renderItem={({ item }) => <Text style={aboutStyles.texto}>{'\u2B24' + ' '}{item.key}</Text>}>

            </FlatList>

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