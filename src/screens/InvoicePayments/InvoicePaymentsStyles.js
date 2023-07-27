import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor:'red'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius:20,
    height:180,
    width:200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputView: {
    borderRadius: 8,
    borderColor:'#E5F1FF',
    // borderColor: 'red',
    marginBottom:10,
    width: 120,
    borderWidth: 2
  },
  inputText:{
    padding:8
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#195090',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#041B3E',
    fontSize: 16,
    fontWeight: '600'
  },
  checkbox:{
    // marginLeft:'auto',
    
  },
});
