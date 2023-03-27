import { Alert, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

            <View style={styles.titulo}>
                <Text style={styles.titulo}>Informações</Text>
            </View>
            <Text style={aboutStyles.texto}>Aplicativo desenvolvido por:</Text>

            <FlatList data={[
                { key: 'Heitor Teruo Shimamura Simizu' },
                { key: 'Rafael Câmara Araújo' }
            ]}
                renderItem={({ item }) => <Text style={aboutStyles.texto}>{'\u2B24' + ' '}{item.key}</Text>}>

            </FlatList>

            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.bottomButtonLeft} >
                <Ionicons name="chevron-back-circle" size={50} />
            </TouchableOpacity>
        </View>
    );
}