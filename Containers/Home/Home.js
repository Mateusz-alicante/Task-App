import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './HomeStyle'

import SingleTask from './SingleTask/SingleTask'

import { addTask } from '../../Utils/Redux/Actions/tasks'

export default function Home(props) {
    const { tasks } = useSelector(state => state.taskReducer);
    const { categories } = useSelector(state => state.categoriesReducer);

    useEffect(() => {
        console.log("tasks: ", tasks)
        console.log("categories: ", categories)
        console.log(props)
    }, [tasks, categories])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>This is the home page</Text>
            </View>
            <View>
                {tasks.map((task) => <SingleTask task={task} navigate={props.navigate} />)}
            </View>
        </SafeAreaView>
    )
}