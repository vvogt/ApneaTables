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
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: 20,
      paddingTop: 20,
      borderTopWidth: 1,
      borderColor: "#20232a",
   }
});

export { styles };