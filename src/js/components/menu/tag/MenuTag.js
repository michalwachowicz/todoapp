import TasksView from '../../task/TasksView'

const MenuTag = ({ id, color, title }, clickEvent, tasks) => {
  const element = document.createElement('div')
  element.setAttribute('data-id', id)
  element.className = 'menu__tag'

  const colorSymbol = document.createElement('div')
  colorSymbol.className = 'menu__color-symbol'
  colorSymbol.style.backgroundColor = color

  const titleElement = document.createElement('h4')
  titleElement.className = 'menu__tag__title'
  titleElement.textContent = title

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.addEventListener('click', (e) => {
    e.preventDefault()

    clickEvent()
    TasksView.generateTasks(title, tasks)
  })

  const addActiveClass = () => {
    element.classList.add('menu__tag--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__tag--active')
  }

  return { element, addActiveClass, removeActiveClass }
}

export default MenuTag
