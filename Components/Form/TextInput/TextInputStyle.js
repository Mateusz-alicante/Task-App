import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 50 : 25,
        marginHorizontal: 10
    },
    textInput: {
        padding: 5,
        margin: 1,
        fontSize: 2,
        borderColor: 'gray',
        borderWidth: 2,
        fontSize: 20
    },
    label: {
        fontSize: 30,
        marginTop: 10
    },
    
  });
  