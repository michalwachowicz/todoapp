import MenuOptions from './option/MenuOptions'
import MenuTags from './tag/MenuTags'
import Divider from '../Divider'
import MenuPriorities from './priority/MenuPriorities'

const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(MenuOptions.element)
  element.appendChild(Divider())
  element.appendChild(MenuTags.element)
  element.appendChild(Divider())
  element.appendChild(MenuPriorities.element)

  const cleanActives = () => {
    for (let option of MenuOptions.menuOptions) {
      option.removeActiveClass()
    }

    for (let tag of MenuTags.tagElements) {
      tag.removeActiveClass()
    }

    for (let priority of MenuPriorities.priorityElements) {
      priority.removeActiveClass()
    }
  }

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  return { element, toggleHide, cleanActives }
})()

export default Menu