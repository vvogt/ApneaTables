import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#20232a',
  },
  tab_left: {
    borderRightWidth: 1,
    borderRightColor: '#20232a',
    paddingBottom: 20,
    paddingTop: 20,
    width: '50%',
    justifyContent: 'center'
  },
});

export { styles };