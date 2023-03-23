import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../content/style';
import aboutStyles from '../content/about';

export default function about({ navigation }) {
    return (
        <View style={styles.container}>

            <Text></Text>
            <Text style={aboutStyles.texto}>Aplicatio desenvolvido por:</Text>

            <FlatList data={[
                {key: 'Heitor Teruo Shimamura Simizu'}, 
                {key: 'Rafael Câmara Araújo'}
            ]} 
            renderItem={({item}) => <Text style={aboutStyles.texto}>{'\u2B24' + ' '}{item.key}</Text>}>

            </FlatList>
            

            <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('home')}>
                <Text style={styles.textoBotaoMenu}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}