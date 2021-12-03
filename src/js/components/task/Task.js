import TaskStatusIcon from '../icons/TaskStatusIcon'
import MenuPriorities from '../menu/priority/MenuPriorities'
import formatDistance from 'date-fns/formatDistance'
import Tags from '../../data/tags'
import NewTaskForm from './NewTaskForm'
import Tasks from '../../data/tasks'
import Menu from '../menu/Menu'

const Task = ({ id, title, description, dueDate, priorityId, tagId, done }) => {
  const element = document.createElement('div')
  element.className = done ? 'task task--done' : 'task'

  const getIcon = () =>
    TaskStatusIcon(
      done
        ? 'done'
        : priorityId > -1
        ? MenuPriorities.getPriorityById(priorityId).title.toLowerCase()
        : 'none',
      'task__icon'
    )

  let icon = getIcon()

  const info = document.createElement('div')
  info.className = 'task__info'

  const titleDesc = document.createElement('div')
  titleDesc.className = 'task__info__basic'

  const titleElement = document.createElement('h2')
  titleElement.className = 'task__info__title'
  titleElement.textContent = title

  const descElement = document.createElement('p')
  descElement.className = 'task__info__desc'
  descElement.textContent = description

  titleDesc.appendChild(titleElement)
  titleDesc.appendChild(descElement)

  const additional = document.createElement('div')
  additional.className = 'task__info__additional'

  if (tagId > -1) {
    const tag = Tags.getTagById(tagId)
    if (tag) {
      const tagContainer = document.createElement('div')
      tagContainer.className = 'task__info__tag'

      const tagTitle = document.createElement('h3')
      tagTitle.className = 'task__info__tag__title'
      tagTitle.textContent = tag.title

      const tagColor = document.createElement('div')
      tagColor.className = 'task__info__tag__color'
      tagColor.style.backgroundColor = tag.color

      tagContainer.appendChild(tagTitle)
      tagContainer.appendChild(tagColor)
      additional.appendChild(tagContainer)
    }
  }

  if (dueDate) {
    const date = document.createElement('p')
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)

    date.className = 'task__info__date'
    date.textContent =
      dueDate.getDate() == currentDate.getDate()
        ? 'Today'
        : formatDistance(dueDate, currentDate, { addSuffix: true })
    date.style.color = done
      ? ''
      : dueDate >= currentDate
      ? '#66a80f'
      : '#e03131'

    additional.appendChild(date)
  }
  info.appendChild(titleDesc)
  info.appendChild(additional)

  element.appendChild(icon)
  element.appendChild(info)
  element.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == icon || icon.contains(e.target)) {
      Tasks.updateTask(id, {
        id,
        title,
        description,
        dueDate,
        priorityId,
        tagId,
        done: !done,
      })
      Menu.updateTasks()
    } else {
      const task = Tasks.getTaskById(id)
      if (task) NewTaskForm.updateForm(task)
    }
  })

  return element
}

export default Task
