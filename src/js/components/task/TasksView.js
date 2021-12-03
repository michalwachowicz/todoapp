import { cleanContent } from '../../contentGenerator'
import Tags from '../../data/tags'
import Divider from '../Divider'
import EmptyMessage from '../EmptyMessage'
import AddIcon from '../icons/AddIcon'
import MoreIcon from '../icons/MoreIcon'
import TagContextMenu from '../tag/TagContextMenu'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

const TasksView = (() => {
  let taskElements = []
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tagId, tasks) => {
    const animationContainer = document.createElement('div')
    animationContainer.className = 'animation-fade'

    const h1 = document.createElement('h1')
    h1.className = 'tasks-view__title'
    h1.textContent = title

    cleanContent(element)
    if (tagId > -1) {
      const header = document.createElement('header')
      header.className = 'tasks-view__header'

      const moreIcon = MoreIcon('tasks-view__icon--more')
      moreIcon.addEventListener('click', (e) => {
        TagContextMenu.generateMenu(tagId, e.clientX, e.clientY)
      })
      const tag = Tags.getTagById(tagId)
      if (tag) h1.textContent = tag.title

      header.appendChild(h1)
      header.appendChild(moreIcon)

      animationContainer.appendChild(header)
    } else {
      animationContainer.appendChild(h1)
    }
    animationContainer.appendChild(Divider())

    if (tasks.length > 0) {
      const tasksContainer = document.createElement('div')
      tasksContainer.className = 'tasks-view__tasks'

      for (let task of tasks) {
        const taskItem = Task(task)
        tasksContainer.appendChild(taskItem)
        taskElements.push(taskItem)
      }
      animationContainer.appendChild(tasksContainer)
    } else {
      animationContainer.appendChild(
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

    animationContainer.appendChild(Divider())
    animationContainer.appendChild(btn)

    element.appendChild(animationContainer)
  }

  return { element, generateTasks }
})()

export default TasksView
