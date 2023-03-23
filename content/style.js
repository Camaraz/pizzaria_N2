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
    },
    inputText: {
        borderColor: "#000",
        backgroundColor: "#fff",
        borderWidth: 2,
        height: 50,
        width: '70%',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    row: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twoButtonRow:{
        width: '40%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderColor: "#000000",
        borderWidth: 2,
        margin: 10
    },

});

export default styles;