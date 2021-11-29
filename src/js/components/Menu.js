const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  const generateTags = (tags) => {}

  return { element, toggleHide, generateTags }
})()

export default Menu
