import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 50 : 25
    }
  });
  