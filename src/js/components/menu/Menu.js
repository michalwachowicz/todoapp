import MenuOptions from './option/MenuOptions'
import MenuTags from './tag/MenuTags'
import Divider from '../Divider'
import MenuPriorities from './priority/MenuPriorities'

const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(MenuOptions)
  element.appendChild(Divider())
  element.appendChild(MenuTags.element)
  element.appendChild(Divider())
  element.appendChild(MenuPriorities.element)

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  return { element, toggleHide }
})()

export default Menu
