import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 40,
  },

  topContainer: {
      width: '100%',
      height: '25%',
      justifyContent: 'center',
      alignItems: 'center'
  },

  bottomContainer: {
     justifyContent: 'space-between',
     alignItems: 'center',
     width: '100%',
     flex: 1
  },

   topText: {
      fontWeight: 'bold',
   },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },

  tableLeft: {
    flexDirection: 'column',
    textAlign: 'center',
    marginRight: 50,
  },

  tableRight: {
    flexDirection: 'column',
  },

  tableText: {
    textAlign: 'center',
    paddingBottom: 4
  },

  startButton: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#00B2FF',
    borderRadius: 100,
    marginBottom: 50,
    marginTop: 50
  },

  buttonText: {
    color: '#ffffff',
  },

  

  tableHeader: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export { styles };