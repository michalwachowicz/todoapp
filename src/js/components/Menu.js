import MenuOptions from './MenuOptions'
import Divider from './Divider'

const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(MenuOptions)
  element.appendChild(Divider())

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  const generateTags = (tags) => {}

  return { element, toggleHide, generateTags }
})()

export default Menu
