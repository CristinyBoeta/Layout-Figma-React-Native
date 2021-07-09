import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Home = ({navigation}) => {
    return(
        <View>
            
            <Image source={require('../../assets/img/Ellipse 1.png')} style={styles.circle}/>

            <View style={styles.titulo}>
            <Icon name="smile-beam" style={styles.rosto}/>
                <Text style={styles.nome}>CalmMind</Text>
            </View>

            <View>
                <Text style={styles.topo}>Stress Less and</Text>
                <Text style={styles.topo}>Laugh Louder</Text>
            </View>

            <View style={styles.circuloSegundo}>
                <Image source={require('../../assets/img/SmallHappiness.png')} data-sizes="auto" style={styles.pessoa} />
                <TouchableOpacity style={styles.press} onPress={() => navigation.navigate('Inicio')}>
                    <Icon name="chevron-circle-right" size={60} style={styles.play}/>
                </TouchableOpacity>
            </View>
            <View style={styles.circuloAzul}></View>
        </View>
    )
};

export default Home;