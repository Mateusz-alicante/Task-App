import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../Utils/Redux/Actions/tasks'
import { addCategory } from '../../Utils/Redux/Actions/categories'
import SimpleTextInput from '../../Components/Form/TextInput/TextInput'
import IntervalInput from './Interval/Interval'
import CategoryInput from './Category/Category'
import moment from 'moment'

import styles from './TaskStyle'

export default function Home(props) {
    const { categories } = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [intervalNum, setIntervalNum] = useState(1)
    const [intervalTyp, setIntervalTyp] = useState(0)
    const [selectCat, setSelectCat] = useState('new')
    const [newCat, setNewCat] = useState('')

    const AddTask = () => {
        console.log("Added new task")
        const currentTime = moment().valueOf()
        const taskData = {
            title,
            description,
            interval: intervalNum * intervalTyp,
            category: selectCat == "new" ? newCat : selectCat,
            createdAt: currentTime,
            lastDone: currentTime

        }
        dispatch(addTask(taskData))

        if (selectCat == "new") {
            dispatch(addCategory(newCat))
        }

        props.navigation.navigate("Home")
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>This is the Add Task page</Text>
                <SimpleTextInput onChange={setTitle} value={title} label={"Title"} />
                <SimpleTextInput onChange={setDescription} value={description} label={"Description"} />
                <IntervalInput num={intervalNum} setNum={setIntervalNum} typ={intervalTyp} setTyp={setIntervalTyp} />
                <CategoryInput selectCat={selectCat} setSelectCat={setSelectCat} newCat={newCat} setNewCat={setNewCat} categories={categories} />
                <Button title={"Add Task"} onPress={AddTask} />
            </ScrollView>
        </SafeAreaView>
    )
}