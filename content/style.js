import { StyleSheet } from "react-native";

// Default style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6666',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        marginBottom: 50,
    },
    botaoTela1: {
        width: '50%',
        height: 50,
        bordercolor: '#000',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelBotao: {
        fontSize: 30,
    },
    botaoMenu:{
        width: '70%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderColor: "#000000",
        borderWidth: 2,
        margin: 10
    },
    textoBotaoMenu:{
        fontSize: 30
    },
    logo:{
        margin: 10,
        resizeMode: 'contain'
    }
});

export default styles;