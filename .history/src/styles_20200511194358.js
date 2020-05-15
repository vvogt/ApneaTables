import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  tableLeft:{
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  tableRight:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
   bottomBar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
});

export { styles };