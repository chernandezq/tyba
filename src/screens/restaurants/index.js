import React from 'react';
import {
  TextInput,
  View,
  Text,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import {styles} from './style';
import {NAME} from '../../commons/strings';
import RestaurantsList from './components/List';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const Restaurantes: () => React = props => {
  const [name, setName] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState([]);

  const location = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de ubicación',
          message:
            'Es necesario el permiso de ubicación para obtener los restaurantes',
        },
      );

      return granted == PermissionsAndroid.RESULTS.GRANTED
        ? getCoords()
        : location();
    } catch (err) {
      Alert.alert('Error', err.toString());
    }
  };

  const getCoords = async () => {
    await Geolocation.getCurrentPosition(
      position => {
        getRestaurants(position);
      },
      error => {
        Alert.alert('Error', error.toString());
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
      },
    );
  };

  const getRestaurants = async position => {
    setLoader(true);
    let data = axios({
      method: 'GET',
      url:
        `https://maps.googleapis.com/maps/api/place/search/json?location=${position.coords.latitude},${position.coords.longitude}&radius=500&keyword=restaurant&sensor=false&key=` +
        `AIzaSyBF-9-JzfR7fPrzxLv2JN9xvbAi-cV7CRk`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(response => response);

    data
      .then(response => {
        setLoader(false);
        setRestaurants(response.data.results);
      })
      .catch(error => {
        setLoader(false);
        location();
        alert(
          'No hemos podido obtener los restaurantes cerca a su ubicación, reintentando...',
        );
      });
  };

  const getRestaurantsByCityName = async city => {
    setLoader(true);
    let data = axios({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=AIzaSyBF-9-JzfR7fPrzxLv2JN9xvbAi-cV7CRk`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(response => response);

    data
      .then(response => {
        setLoader(false);
        setRestaurants(response.data.results);
      })
      .catch(error => {
        setLoader(false);
        alert(
          'No hemos podido obtener los restaurantes en esta ciudad, reintentando...',
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.containerSearch}>
          <Text style={styles.labelName}>{NAME}</Text>
          <TextInput
            placeholder={'Buscar por nombre'}
            style={styles.inputName}
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.containerButtons}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                getRestaurantsByCityName(name);
              }}
              underlayColor="#fff">
              <Text style={styles.textoBoton}>Buscar</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, marginLeft: 10}}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                location();
              }}
              underlayColor="#fff">
              <Text style={styles.textoBoton}>Buscar por ubicación</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loader && <ActivityIndicator color={'red'} size="small" />}

        <View style={{flex: 2}}>
          <RestaurantsList data={restaurants}></RestaurantsList>
        </View>
      </View>
    </View>
  );
};

export default Restaurantes;
