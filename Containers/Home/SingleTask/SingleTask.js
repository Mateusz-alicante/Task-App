import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './SingleTaskStyles'

export default function SingleTask(props) {
    useEffect(() => console.log(props), [])
    return (
        <View>
            <Text>{props.task.title}</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Test", task)}>
                <Text><Ionicons name={"reorder-four-outline"} size={100} color={"green"} /></Text>
            </TouchableOpacity>
        </View>
    )
}