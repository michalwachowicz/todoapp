import Tags from '../../data/tags'
import ColorPicker from '../ColorPicker'
import Menu from '../menu/Menu'

const TagEditPopup = (() => {
  let tag = null
  const element = document.createElement('div')
  element.className = 'tag-popup tag-popup--edit hidden'

  const popup = document.createElement('div')
  popup.className = 'tag-popup__popup'

  const h3 = document.createElement('h3')
  h3.className = 'tag-popup__title'
  h3.textContent = 'Edit task:'

  const form = document.createElement('form')
  form.className = 'tag-popup__form'

  const inputs = document.createElement('div')
  inputs.className = 'tag-popup__inputs'

  const colorPicker = document.createElement('button')
  colorPicker.type = 'button'
  colorPicker.className = 'tag-popup__picker'

  const currentColor = document.createElement('div')
  currentColor.className = 'tag-popup__picker__current'
  currentColor.style.backgroundColor = '#ff6b6b'
  currentColor.setAttribute('data-color', '#ff6b6b')

  colorPicker.appendChild(currentColor)
  colorPicker.addEventListener('click', (e) => {
    e.preventDefault()
    ColorPicker.generate(currentColor, e.x, e.y)
  })

  const title = document.createElement('input')
  title.className = 'tag-popup__input'
  title.type = 'text'
  title.placeholder = 'Tag title'
  title.required = true

  inputs.appendChild(colorPicker)
  inputs.appendChild(title)

  const btns = document.createElement('div')
  btns.className = 'tag-popup__btns'

  const editBtn = document.createElement('button')
  editBtn.className = 'tag-popup__btn tag-popup__btn--edit'
  editBtn.type = 'submit'
  editBtn.textContent = 'Edit'

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'tag-popup__btn tag-popup__btn--cancel'
  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.addEventListener('click', () => hide())

  btns.appendChild(editBtn)
  btns.appendChild(cancelBtn)

  form.appendChild(inputs)
  form.appendChild(btns)

  popup.appendChild(h3)
  popup.appendChild(form)

  element.appendChild(popup)
  element.addEventListener('submit', (e) => {
    e.preventDefault()

    if (tag) {
      tag = {
        ...tag,
        color: currentColor.getAttribute('data-color'),
        title: title.value,
      }
      Tags.updateTag(tag.id, tag)

      const tagDom = document.querySelector(
        `div.menu__tag[data-id="${tag.id}"]`
      )
      tagDom.querySelector('.menu__color-symbol').style.backgroundColor =
        tag.color
      tagDom.querySelector('.menu__tag__title').textContent = tag.title

      Menu.updateTasks()
      hide()
    }
  })

  const generatePopup = (tagId) => {
    tag = { ...Tags.getTagById(tagId) }

    if (tag) {
      title.value = tag.title
      currentColor.style.backgroundColor = tag.color
      currentColor.setAttribute('data-color', tag.color)
      element.classList.remove('hidden')
    }
  }

  const hide = () => element.classList.add('hidden')

  return { element, generatePopup }
})()

export default TagEditPopup
