import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menu : {
        width: 20,
        height: 20,
    },
    topo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    titulo: {
        right: 90,
        fontSize: 16,
    },
    textFont: {
        fontSize: 16,
    },
    separador: {
        top: 10,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    },
    botaoSuperior: {
        top: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        right: 10,
    },
    tituloPrimeiroCard: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    primeiraImagemDoCard: {
        top: 20,
        width: 150,
        height: 90,
        left: 100,
    },
    primeiroCard: {
        top: 10,
        borderRadius: 10,
        backgroundColor: '#FFE3D3',
        margin: 10,
        height: 135,
    },
    minuto: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 60,
        textAlign: 'center',
    },
    segundoCard: {
        top: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E7F6FF',
        borderRadius: 10,
        width: 160,
        height: 150,
        margin: 10,
    },
    segundaImagemDoCard: {
        top: 10,
        left: 40,
    },
    cabecalhos: {
        margin: 10,
    },
    titulos : {
        padding: 5,
        fontSize: 16,
    },
    terceiraImagemDoCard: {
        width: 60,
        height: 117,
        top: 20,
        left: 40,
    },
    terceiroCard: {
        backgroundColor: '#FFE8EC',
        left: 70,
        width: 160,
        height: 230,
        borderRadius: 10,
    },

    quartoCard: {
        backgroundColor: '#FFFACA',
        flexDirection: 'row',
        borderRadius: 10,
        width: 160,
        height: 290,
        margin: 10,
        top: 0,
    },
    quartaImagemDoCard: {
        width: 70,
        height: 130,
        top: 30,
        left: 30,
    },
    quintoCard: {
        backgroundColor: '#EEE5FF',
        top: 80,
        left: 80,
        width: 155,
        height: 210,
        borderRadius: 10,
    },
    quintaImagemDoCard: {
        width: '90%',
        height: '80%',
    },

})

export default styles;

