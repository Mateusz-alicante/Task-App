import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './CategoryStyles'
import SimpleTextInput from '../../../Components/Form/TextInput/TextInput'
import {Picker} from '@react-native-picker/picker';
import { useEffect } from 'react';

const Interval = (props) => {

    const categories = [
        "new"
    ].concat(props.categories)

    const textInput = () => (
        <View>
            <SimpleTextInput label={'Title of the new category:'} value={props.newCat} onChange={props.setNewCat} />
        </View>
    )
    return (
        <View>
            <Text style={styles.label}>Task Category:</Text>
            <View style={styles.innerContainer}>
                <View style={styles.InputContainer}>
                    <Picker
                        selectedValue={props.selectCat}
                        onValueChange={props.setSelectCat}>
                            {categories.map(cat => <Picker.Item label={cat} value={cat} />)}
                        
                    </Picker>
                </View>
                {props.selectCat == "new" && textInput()}
            </View>
        </View>
    );
}

export default Interval;