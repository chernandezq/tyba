import React from 'react';
import {styles} from './style';
import {NEXT, EMAIL, PASSWORD, NAME} from '../../commons/strings';
import {TextInput, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Registro: () => React = props => {
  const {navigation} = props;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigateToRestaurants = () => {
    navigation.navigate('Restaurantes');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.2, marginLeft: 10, marginRight: 10, marginTop: 20}}>
        <Text style={{fontSize: 25}}>
          Crea tu cuenta, invierte y cumple tus metas.
        </Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.labelEmail}>{NAME}</Text>
        <TextInput
          style={styles.inputEmail}
          onChangeText={text => setName(text)}
          value={name}
        />

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
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            navigateToRestaurants();
          }}
          underlayColor="#fff">
          <Text style={styles.textoBoton}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registro;
