import TagEditPopup from './TagEditPopup'

const TagContextMenu = (() => {
  let tagId = -1
  const element = document.createElement('div')
  element.className = 'tag-menu hidden'

  const h4 = document.createElement('h4')
  h4.className = 'tag-menu__title'
  h4.textContent = 'Select action:'

  const editBtn = document.createElement('button')
  editBtn.className = 'tag-menu__btn tag-menu__btn--edit'
  editBtn.textContent = 'Edit'
  editBtn.addEventListener('click', () => {
    TagEditPopup.generatePopup(tagId)
    hide()
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'tag-menu__btn tag-menu__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    // Open delete popup
    hide()
  })

  const generateMenu = (id, x, y) => {
    tagId = id
    element.classList.remove('hidden')
    element.style.top = `${y}px`
    element.style.left = `${x - element.clientWidth}px`
  }

  const hide = () => element.classList.add('hidden')

  element.appendChild(h4)
  element.appendChild(editBtn)
  element.appendChild(deleteBtn)

  document.addEventListener('mousedown', (e) => {
    if (e.target != element && !element.contains(e.target)) hide()
  })

  return { element, generateMenu }
})()

export default TagContextMenu
