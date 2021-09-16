import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
//import { Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    peso: 95,
    altura: 1.73,
    imc:0,
    legenda: 'Indeterminado'
  }


  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura**2);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado <18.5){
      this.setState({
        legenda:'Magreza'
      });
    } else if (resultado >= 18.5 && resultado < 25){
        this.setState({
          legenda:'Normal'
        });
    } else if (resultado >= 25 && resultado < 30){
        this.setState({
          legenda:'Sobrepeso'
        });
    } else if (resultado >= 25 && resultado < 30){
        this.setState({
          legenda:'Sobrepeso'
        });
    } else if (resultado >= 30 && resultado < 40){
        this.setState({
          legenda:'Obesidade'
        });
    } else {
        this.setState({
          legenda: 'Obesidade Grave!'
        })
    }
  }

  render () {
    return (
      <View style={styles.app}> 
        <Text style={styles.legenda}>Seu IMC</Text>

      
        <View style={styles.painel}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
        

        <View>
          <TextInput 
            style={styles.peso}
            onChangeText = {valor => {
              this.setState({peso: valor.replace(',','.')});
            }}
          placeholder = "Digite seu peso"/>
          <TextInput 
            style={styles.altura}
            onChangeText = {valor => {
              this.setState({altura: valor.replace(',','.')});
            }}
          placeholder="Digite sua altura" />
          <Button title="Calcular" onPress={this.calcularIMC} />
        </View>

      </View>
    );
  }  
}

const styles = StyleSheet.create({
  app: {  
    padding: 50,

  },
  painel: {
    backgroundColor: '#66ff66',
    borderRadius: 10,
    marginBottom: 20,
    marginVertical: 19,
    padding: 10
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    borderColor: '#000',
    borderWidth: 1,
  },
  altura: {
    borderColor: '#000',
    borderWidth: 1,
  }
});
