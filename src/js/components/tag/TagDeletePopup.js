import Tags from '../../data/tags'
import Tasks from '../../data/tasks'
import MenuOptions from '../menu/option/MenuOptions'
import MenuTags from '../menu/tag/MenuTags'

const TagDeletePopup = (() => {
  let tagId = -1
  const element = document.createElement('div')
  element.className = 'tag-popup tag-popup--delete hidden'

  const popup = document.createElement('div')
  popup.className = 'tag-popup__popup'

  const h3 = document.createElement('h3')
  h3.className = 'tag-popup__title'
  h3.textContent = 'Delete tag:'

  const desc = document.createElement('p')
  desc.className = 'tag-popup__desc'
  desc.textContent =
    'Are you sure you want to delete the tag and all the tasks with the tag?'

  const btns = document.createElement('div')
  btns.className = 'tag-popup__btns'

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'tag-popup__btn tag-popup__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    if (tagId > -1) {
      Tags.removeTag(tagId)

      const tasks = Tasks.getTasks()
      const tasksToDelete = []
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].tagId == tagId) {
          tasksToDelete.push(tasks[i])
        }
      }
      for (let task of tasksToDelete) {
        Tasks.removeTask(task.id)
      }
      MenuTags.generateTags(Tags.getTags())
      MenuOptions.menuOptions[0].element.click()
    }
    hide()
  })

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'tag-popup__btn tag-popup__btn--cancel'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.addEventListener('click', () => hide())

  btns.appendChild(deleteBtn)
  btns.appendChild(cancelBtn)

  popup.appendChild(h3)
  popup.appendChild(desc)
  popup.appendChild(btns)

  element.appendChild(popup)

  const hide = () => element.classList.add('hidden')
  const generatePopup = (id) => {
    tagId = id
    element.classList.remove('hidden')
  }

  return { element, generatePopup }
})()

export default TagDeletePopup
