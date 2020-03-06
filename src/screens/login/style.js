import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'center',
    width: 200,
    height: 200,
  },
  containerForm: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  labelEmail: {
    color: 'gray',
    marginBottom: 10,
  },
  inputEmail: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.1,
    borderRadius: 8,
    backgroundColor: '#e9e9e9e9',
  },

  boton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#18A283',
    height: 11,
  },
  textoBoton: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'NexaBold',
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
  },
  containerRegister: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  labelRegister: {
    color: 'gray',
  },
  textRegister: {
    color: '#18A283',
    fontWeight: '700',
  },
});
