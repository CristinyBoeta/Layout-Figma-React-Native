import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#FFE3D3',
        position: 'absolute',
        width: 299,
        height: 240,
        right: 0,
        left: 220,
        top: -50,
        borderRadius: 1000,
    },
    rosto: {
        width: 15,
        height: 15,
        left: 0,
        marginTop: 10,
        color: '#ACB8C2',
    },
    nome: {
        marginTop: 10,
        fontSize: 12,
        color: '#ACB8C2',
    },
    titulo : {
        flexDirection: 'row',
        marginTop: 20,
        left: 25,
    },
    topo: {
        marginTop: 5,
        fontSize: 35,
        margin: 0,
        left: 25,
    },
    circuloSegundo: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
    },
    circuloAzul: {
        position: 'absolute',
        bottom: -750,
        zIndex: -1,
        width: 1000,
        height: 1000,
        borderRadius: 1000,
        alignSelf: 'center',
        backgroundColor: '#87CEFA',
        opacity: 0.2,
    },
    pessoa: {
        width: '60%',
        height: '60%',
    },
    play: {
        marginTop: 20,
    },
})

export default styles;