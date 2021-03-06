const Tasks = (() => {
  const loadFromStorage = () => {
    if (localStorage.getItem('tasks')) {
      const loadedTasks = JSON.parse(localStorage.tasks)
      for (let task of loadedTasks) {
        if (task.dueDate) task.dueDate = new Date(parseInt(task.dueDate))
        else task.dueDate = null
      }
      return loadedTasks
    }
    return []
  }

  const tasks = loadFromStorage()
  let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : -1

  const saveToStorage = () => {
    const tasksCopy = []
    for (let task of tasks) {
      let taskCopy = { ...task }
      if (taskCopy.dueDate) {
        taskCopy.dueDate = +taskCopy.dueDate
      }
      tasksCopy.push(taskCopy)
    }
    localStorage.tasks = JSON.stringify(tasksCopy)
  }

  const getSortedTasks = () => {
    return [...tasks].sort((task1, task2) => {
      const priority1 = task1.done ? -99 : task1.priorityId
      const priority2 = task2.done ? -99 : task2.priorityId

      if (priority1 > priority2) return -1
      if (priority1 < priority2) return 1

      if (task1.dueDate < task2.dueDate) return -1
      if (task1.dueDate > task2.dueDate) return 1
    })
  }

  const getTaskById = (id) => tasks.find((task) => task.id == id)
  const getTasks = () => tasks
  const getLastId = () => lastId

  const addTask = (task) => {
    tasks.push(task)
    saveToStorage()

    lastId++
  }

  const updateTask = (id, task) => {
    const index = tasks.findIndex((task) => task.id == id)
    if (index > -1) {
      tasks[index] = task
      saveToStorage()
    }
  }

  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.id == id)
    if (index > -1) {
      tasks.splice(index, 1)
      saveToStorage()
    }
  }

  return {
    getTaskById,
    getTasks,
    getLastId,
    getSortedTasks,
    addTask,
    updateTask,
    removeTask,
  }
})()

export default Tasks
