import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  tab_left: {
    borderRightWidth: 1,
    borderRightColor: '#e5e5e5',
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
  tab_active: {
    backgroundColor: "#00B2FF"
  },
  text_active: {
    color: "#ffffff",
    textAlign: 'center',
  },
  tab_text: {
     textAlign: 'center',
  }
});

export { styles };