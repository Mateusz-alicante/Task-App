import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './TextInputStyle'

const SimpleTextInput = (props) => {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => props.onChange(text)}
                value={props.value}
            />
        </View>
    );
}

export default SimpleTextInput;