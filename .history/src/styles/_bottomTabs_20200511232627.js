import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
  },
  tab_left: {
    borderRightWidth: 1,
    borderRightColor: '#20232a',
    paddingBottom: 20,
    paddingTop: 20,
    width: '50%',
    justifyContent: 'center',
  },
  tab_right: {
    paddingBottom: 20,
    paddingTop: 20,
    width: '50%',
    justifyContent: 'center',
  },
  tab_text: {
     textAlign: 'center'
  }
});

export { styles };