import Tags from '../../data/tags'
import Tasks from '../../data/tasks'
import Menu from '../menu/Menu'

const NewTaskForm = (() => {
  let task = null

  const element = document.createElement('div')
  element.className = 'task-form hidden'

  const show = () => element.classList.remove('hidden')
  const hide = () => element.classList.add('hidden')

  const popup = document.createElement('div')
  popup.className = 'task-form__popup'

  const h2 = document.createElement('h2')
  h2.className = 'task-form__title'

  const form = document.createElement('form')
  form.className = 'task-form__form'

  const formInputs = document.createElement('div')
  formInputs.className = 'task-form__form__inputs'

  const title = document.createElement('input')
  title.classList = 'task-form__form__title'
  title.placeholder = 'Task Title'
  title.required = true
  title.maxLength = 25

  const desc = document.createElement('textarea')
  desc.classList = 'task-form__form__desc'
  desc.placeholder = 'Description (Optional)'
  desc.maxLength = 140

  formInputs.appendChild(title)
  formInputs.appendChild(desc)

  const additionals = document.createElement('div')
  additionals.className = 'task-form__form__options'

  const date = document.createElement('input')
  const currentDate = new Date().toISOString().substring(0, 10)
  date.className = 'task-form__form__date'
  date.type = 'date'
  date.min = currentDate

  const tags = document.createElement('select')
  tags.className = 'task-form__form__select'

  const updateTags = (tagsList) => {
    tags.innerHTML = ''

    for (let tag of [
      { id: -2, title: 'Tag (Optional)' },
      { id: -1, title: 'None' },
      ...tagsList,
    ]) {
      const option = document.createElement('option')
      option.value = tag.id
      option.textContent = tag.title

      if (tag.id === -2) {
        option.disabled = true
        option.selected = true
      }

      tags.appendChild(option)
    }
  }

  const priorities = document.createElement('select')
  priorities.className = 'task-form__form__select'

  const updatePriorities = (prioritiesList) => {
    priorities.innerHTML = ''

    for (let priority of [
      { id: -2, title: 'Priority (Optional)' },
      { id: -1, title: 'None' },
      ...prioritiesList,
    ]) {
      const option = document.createElement('option')
      option.value = priority.id
      option.textContent = priority.title

      if (priority.id === -2) {
        option.disabled = true
        option.selected = true
      }

      priorities.appendChild(option)
    }
  }

  additionals.appendChild(date)
  additionals.appendChild(tags)
  additionals.appendChild(priorities)

  const btns = document.createElement('div')
  btns.className = 'task-form__form__btns'

  const submitBtn = document.createElement('button')
  submitBtn.className = 'task-form__form__btn task-form__form__btn--submit'
  submitBtn.type = 'submit'

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'task-form__form__btn task-form__form__btn--cancel'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.type = 'button'
  cancelBtn.addEventListener('click', hide)

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'task-form__form__btn task-form__form__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.type = 'button'
  deleteBtn.addEventListener('click', () => {
    if (task && task.id > -1) {
      Tasks.removeTask(task.id)
      Menu.updateTasks()
    }
    hide()
  })

  btns.appendChild(submitBtn)
  btns.appendChild(deleteBtn)
  btns.appendChild(cancelBtn)

  form.appendChild(formInputs)
  form.appendChild(additionals)
  form.appendChild(btns)

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskObj = {
      id: task && task.id > -1 ? task.id + 1 : Tasks.getLastId() + 1,
      title: title.value,
      description: desc.value ? desc.value : null,
      dueDate: date.value ? new Date(date.value) : null,
      priorityId: priorities.value > -1 ? priorities.value : -1,
      tagId: tags.value > -1 ? tags.value : -1,
      done: task ? task.done : false,
    }

    if (task && task.id > -1) {
      const index = Tasks.getTasks().findIndex((t) => t.id == task.id)
      if (index > -1) {
        Tasks.updateTask(index, taskObj)
      }
    } else {
      Tasks.addTask(taskObj)
    }
    Menu.updateTasks()
    hide()
  })

  popup.appendChild(h2)
  popup.appendChild(form)
  element.appendChild(popup)

  const updateForm = (taskObj) => {
    task = taskObj

    if (task) {
      h2.textContent = 'Edit task:'
      submitBtn.textContent = 'Edit'
      deleteBtn.classList.remove('hidden')

      title.value = task.title
      desc.value = task.description
      if (task.dueDate) date.value = task.dueDate.toISOString().substring(0, 10)

      priorities.value = task.priorityId
      tags.value = task.tagId
    } else {
      h2.textContent = 'Add new task:'
      submitBtn.textContent = 'Add'
      deleteBtn.classList.add('hidden')

      title.value = ''
      desc.value = ''
      date.value = ''

      priorities.value = -2
      tags.value = -2
    }
    show()
  }

  updateTags(Tags.getTags())
  updatePriorities([
    { id: 0, color: '#94D82D', title: 'Low' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#FF6B6B', title: 'High' },
  ])

  return { element, updateForm, hide, updateTags }
})()

export default NewTaskForm
