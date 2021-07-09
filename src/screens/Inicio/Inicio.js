import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

const Inicio = ({navigation}) => {

  return (
    <ScrollView>
      <View>
        <View style={styles.topo}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/img/TheLittle.png')} />
          </TouchableOpacity>
          <Text style={styles.titulo}>Hi, Martha</Text>
          <Image
            source={require('../../assets/img/menu.png')}
            style={styles.menu}
          />
        </View>

        <View style={styles.separador} />
        <View style={styles.botaoSuperior}>
          <TouchableOpacity>
            <Text styles={styles.textFont}>Sleep</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text styles={styles.textFont}>Inner Peace</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text styles={styles.textFont}>Stress</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text styles={styles.textFont}>Anxiety</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.primeiroCard}>
          <View style={styles.tituloPrimeiroCard}>
            <Text style={styles.textFont}>Zen Meditation</Text>
            <Text style={styles.minuto}>20 min</Text>
          </View>
          <Image
            source={require('../../assets/img/SmallEntertainment.png')}
            style={styles.primeiraImagemDoCard}
          />
        </View>

        <View style={styles.segundoCard}>
          <View style={styles.cabecalhos}>
            <Text style={styles.titulos}>Reflection</Text>
            <Text style={styles.minuto}>6 min</Text>
            <Image
              source={require('../../assets/img/Candle.png')}
              style={styles.segundaImagemDoCard}
            />
          </View>

          <View style={styles.terceiroCard}>
            <View style={styles.cabecalhos}>
              <Text style={styles.titulos}>Visualization</Text>
              <Text style={styles.minuto}>13 min</Text>
              <Image
                source={require('../../assets/img/Standing.png')}
                style={styles.terceiraImagemDoCard}
              />
            </View>
          </View>
        </View>

        <View style={styles.quartoCard}>
          <View style={styles.cabecalhos}>
            <Text style={styles.titulos}>Loving{'\n'}Kindness</Text>
            <Text style={styles.minuto}>15 min</Text>
            <Image
              source={require('../../assets/img/Container.png')}
              style={styles.quartaImagemDoCard}
            />
          </View>

          <View style={styles.quintoCard}>
            <View style={styles.cabecalhos}>
              <Text style={styles.titulos}>Visualization</Text>
              <Text style={styles.minuto}>13 min</Text>
              <Image
                source={require('../../assets/img/planta.png')}
                style={styles.quintaImagemDoCard}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Inicio;
