import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './SingleTaskStyles'

export default function SingleTask(props) {
    return (
        <View style={styles.container}>
            <Text>This is a single Task</Text>
            <Text>{props.route.params.title}</Text>
        </View>
    )
}