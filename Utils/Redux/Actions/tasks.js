export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        newTask: task
    }
}