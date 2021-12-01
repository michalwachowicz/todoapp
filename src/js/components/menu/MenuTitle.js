const MenuTitle = (title) => {
  const element = document.createElement('h3')
  element.className = 'menu__title'
  element.textContent = title

  return element
}

export default MenuTitle
