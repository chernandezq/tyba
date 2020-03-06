import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerForm: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  labelName: {
    color: 'gray',
    marginBottom: 10,
  },
  inputName: {
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
  containerSearch: {
    flex: 0.5,
    flexDirection: 'column',
    marginTop: 10,
  },
  containerButtons: {flex: 0.5, flexDirection: 'row'},
});
