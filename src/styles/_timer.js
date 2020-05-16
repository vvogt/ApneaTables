import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   timerContainer: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center'
   },
   top: {
      width: '90%',
      justifyContent: 'flex-start',
   },
   circleContainer: {
      justifyContent: 'center',
      flexGrow: 1
   },
   timerType: {
      height: '20%',
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: 20
   }

});

export { styles };