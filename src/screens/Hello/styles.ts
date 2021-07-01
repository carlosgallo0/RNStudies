import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5C6E91',
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        },
    content:{
      color:'#EEEDED',
      fontSize: 45,
      marginHorizontal: 10
    },
    boldText:{
      color:'#EEEDED',
      fontWeight: 'bold',
      fontSize: 45,
      marginHorizontal: 10
    },
    image:{
      marginTop:'20%',
      resizeMode : 'cover',
      width: 240,
      height: 240,

    }
});
