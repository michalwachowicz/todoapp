const Tasks = (() => {
  const loadFromStorage = () => {
    if (localStorage.getItem('tasks')) {
      const loadedTasks = JSON.parse(localStorage.tasks)
      for (let task of loadedTasks) {
        task.dueDate = new Date(parseInt(task.dueDate, 10))
      }
      return loadedTasks
    }
    return []
  }

  const tasks = loadFromStorage()
  let lastId =
    tasks.length > 0 && tasks[tasks.length - 1].id
      ? tasks[tasks.length - 1].id
      : -1

  const saveToStorage = () => {
    const tasksCopy = [...tasks]
    for (let task of tasksCopy) {
      if (task.dueDate) task.dueDate = +task.dueDate.getTime()
    }
    localStorage.tasks = JSON.stringify(tasks)
  }

  const getSortedTasks = () => {
    return [...tasks].sort((task1, task2) => {
      if (task1.dueDate < task2.dueDate) return -1
      if (task1.dueDate > task2.dueDate) return 1

      if (task1.priorityId > task2.priorityId) return -1
      if (task1.priorityId < task2.priorityId) return 1
    })
  }

  const getTaskById = (id) => tasks.find((task) => task.id == id)
  const getTasks = () => tasks
  const getLastId = () => lastId

  const addTask = (task) => {
    task.id = ++lastId
    tasks.push(task)
    saveToStorage()
  }

  const updateTask = (id, task) => {
    tasks[id] = task
    saveToStorage()
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