import Menu from '../Menu'
import MoreIcon from '../../icons/MoreIcon'
import TasksView from '../../task/TasksView'
import TagContextMenu from '../../tag/TagContextMenu'
import CurrentMenuOption from '../CurrentMenuOption'

const MenuTag = ({ id, color, title }, tasks) => {
  let sortedTasks = tasks

  const element = document.createElement('div')
  element.setAttribute('data-id', id)
  element.className = 'menu__tag'

  const colorSymbol = document.createElement('div')
  colorSymbol.className = 'menu__color-symbol'
  colorSymbol.style.backgroundColor = color

  const titleElement = document.createElement('h4')
  titleElement.className = 'menu__tag__title'
  titleElement.textContent = title

  const moreIcon = MoreIcon('menu__tag__icon menu__tag__icon--more')

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.appendChild(moreIcon)

  element.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == moreIcon || moreIcon.contains(e.target)) {
      TagContextMenu.generateMenu(id, e.x, e.y)
    } else {
      TasksView.generateTasks(title, id, sortedTasks)
      CurrentMenuOption.setElement(element)
      Menu.cleanActives()
      addActiveClass()
    }
  })

  const addActiveClass = () => {
    element.classList.add('menu__tag--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__tag--active')
  }

  const updateTasks = (updatedTasks) => (sortedTasks = updatedTasks)

  return { element, addActiveClass, removeActiveClass, updateTasks }
}

export default MenuTag
