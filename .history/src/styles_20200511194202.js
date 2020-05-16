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
    alignItems: 'space-between',
  },
  tableLeft:{
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  tableRight:{
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
   bottomBar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
});

export { styles };