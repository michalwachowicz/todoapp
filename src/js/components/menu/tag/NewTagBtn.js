import AddIcon from '../../icons/AddIcon'
import ColorPicker from '../../ColorPicker'

const NewTagBtn = (submitEvent) => {
  const element = document.createElement('div')
  element.className = 'menu__new-tag'

  const generateButton = () => {
    const btn = document.createElement('button')
    btn.classList = 'menu__new-tag__btn menu__new-tag__btn--new'

    const h4 = document.createElement('h4')
    h4.className = 'menu__new-tag__btn__title'
    h4.textContent = 'Create new tag'

    btn.appendChild(AddIcon('menu__new-tag__btn__icon'))
    btn.appendChild(h4)
    btn.addEventListener('click', generateForm)

    element.innerHTML = ''
    element.appendChild(btn)
  }

  const generateForm = () => {
    const form = document.createElement('form')
    form.className = 'menu__new-tag__form'

    const colorPicker = document.createElement('button')
    colorPicker.className = 'menu__new-tag__picker'

    const currentColor = document.createElement('div')
    currentColor.className = 'menu__new-tag__picker__current'
    currentColor.style.backgroundColor = '#ff6b6b'
    currentColor.setAttribute('data-color', '#ff6b6b')

    colorPicker.addEventListener('click', (e) => {
      e.preventDefault()
      ColorPicker.generate(currentColor, e.x, e.clientY + 50)
    })
    colorPicker.appendChild(currentColor)

    const nameInput = document.createElement('input')
    nameInput.className = 'menu__new-tag__form__input'
    nameInput.type = 'text'
    nameInput.placeholder = 'Tag name'
    nameInput.required = true
    nameInput.maxLength = 15

    const submitBtn = document.createElement('button')
    submitBtn.className = 'menu__new-tag__btn menu__new-tag__btn--submit'
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Add'

    form.appendChild(colorPicker)
    form.appendChild(nameInput)
    form.appendChild(submitBtn)
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      generateButton()
      submitEvent()
    })

    element.innerHTML = ''
    element.appendChild(form)
  }

  generateButton()
  return element
}

export default NewTagBtn
