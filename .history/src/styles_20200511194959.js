import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 40
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  tableLeft:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tableRight:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
   bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      paddingBottom: 40
   }
});

export { styles };