import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
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
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
});

export { styles };