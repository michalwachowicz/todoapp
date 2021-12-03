import MenuOptions from './option/MenuOptions'
import MenuTags from './tag/MenuTags'
import Divider from '../Divider'
import MenuPriorities from './priority/MenuPriorities'
import Tasks from '../../data/tasks'
import CurrentMenuOption from './CurrentMenuOption'

const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu hidden'

  element.appendChild(MenuOptions.element)
  element.appendChild(Divider())
  element.appendChild(MenuTags.element)
  element.appendChild(Divider())
  element.appendChild(MenuPriorities.element)

  const cleanActives = () => {
    MenuTags.cleanActives()
    for (let option of MenuOptions.menuOptions) {
      option.removeActiveClass()
    }

    for (let priority of MenuPriorities.priorityElements) {
      priority.removeActiveClass()
    }
  }

  const updateTasks = () => {
    const tasks = Tasks.getSortedTasks()

    MenuOptions.updateTasks(tasks)
    MenuTags.updateTasks(tasks)
    MenuPriorities.updateTasks(tasks)

    const currentMenuOption = CurrentMenuOption.getElement()
    if (currentMenuOption) currentMenuOption.click()
  }

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  return { element, toggleHide, cleanActives, updateTasks }
})()

export default Menu
