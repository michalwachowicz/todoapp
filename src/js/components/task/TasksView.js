import Divider from '../Divider'
import EmptyMessage from '../EmptyMessage'
import AddIcon from '../icons/AddIcon'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

const TasksView = (() => {
  let taskElements = []
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tasks) => {
    const h1 = document.createElement('h1')
    h1.className = 'tasks-view__title'
    h1.textContent = title

    element.innerHTML = ''
    element.appendChild(h1)
    element.appendChild(Divider())

    if (tasks.length > 0) {
      const tasksContainer = document.createElement('div')
      tasksContainer.className = 'tasks-view__tasks'

      for (let task of tasks) {
        const taskItem = Task(task)
        tasksContainer.appendChild(taskItem)
        taskElements.push(taskItem)
      }
      element.appendChild(tasksContainer)
    } else {
      element.appendChild(
        EmptyMessage(
          "It's pretty empty here 😕. Add a new task with the button below!"
        )
      )
    }

    const btn = document.createElement('button')
    btn.className = 'tasks-view__btn'
    btn.addEventListener('click', () => NewTaskForm.updateForm(null))

    const btnTitle = document.createElement('h3')
    btnTitle.className = 'tasks-view__btn__title'
    btnTitle.textContent = 'Add new task'

    btn.appendChild(AddIcon('tasks-view__btn__icon'))
    btn.appendChild(btnTitle)

    element.appendChild(Divider())
    element.appendChild(btn)
  }

  return { element, generateTasks }
})()

export default TasksView
