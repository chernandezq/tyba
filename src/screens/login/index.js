import React from 'react';
import {styles} from './style';
import {NEXT, EMAIL, PASSWORD} from '../../commons/strings';
import {TextInput, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login: () => React = props => {
  const {navigation} = props;
  const [email, setEmail] = React.useState('');

  const navigateToRegister = () => {
    navigation.navigate('Registro');
  };

  const navigateToRestaurants = () => {
    navigation.navigate('Restaurantes');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={require('../../assets/images/tyba.png')}></Image>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.labelEmail}>{EMAIL}</Text>
        <TextInput
          keyboardType={'email-address'}
          style={styles.inputEmail}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <Text style={styles.labelEmail}>{PASSWORD}</Text>

        <TextInput
          secureTextEntry={true}
          style={styles.inputEmail}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            navigateToRestaurants();
          }}
          underlayColor="#fff">
          <Text style={styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hr} />

      <View style={styles.containerRegister}>
        <Text style={styles.labelRegister}>¿No tienes Cuenta?</Text>
        <TouchableOpacity onPress={() => {}} underlayColor="#fff">
          <Text
            style={styles.textRegister}
            onPress={() => navigateToRegister()}>
            {' '}
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
