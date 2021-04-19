import React, { useEffect } from 'react';
import { TextInput, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input'

import styles from './IntervalStyle'
import SimpleTextInput from '../../../Components/Form/TextInput/TextInput'
import { Picker } from '@react-native-picker/picker';
import pickerOptions from './IntervalOptions'

const Interval = (props) => {
    return (
        <View>
            <Text style={styles.label}>Task Interval:</Text>
            <View style={styles.innerContainer}>
                <View style={styles.InputContainer}>
                    <NumericInput onChange={props.setNum} value={props.num} minValue={1} />
                </View>
                <View style={styles.InputContainer}>
                    <Picker
                        selectedValue={props.typ}
                        onValueChange={props.setTyp}>
                        {pickerOptions.map(option => <Picker.Item label={option.label} value={option.value} key={option.label} />)}
                    </Picker>
                </View>
            </View>
        </View>
    );
}

export default Interval;