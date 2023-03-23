import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../content/style';
import logo from '../img/logo-pizza.png';

export default function home({ navigation }) {
  return (
    <View style={styles.container}>

        <Image source={logo} style={styles.logo} ></Image>
        
        <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('order')}>
            <Text style={styles.textoBotaoMenu}>Novo Pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('product')}>
            <Text style={styles.textoBotaoMenu}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenu} onPress={() => navigation.navigate('about')}> 
            <Text style={styles.textoBotaoMenu}>Informações</Text>
        </TouchableOpacity>

    </View>
  );
}