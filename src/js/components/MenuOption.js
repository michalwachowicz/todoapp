const MenuOption = (icon, title, active, clickEvent) => {
  const element = document.createElement('div')
  element.className = active
    ? 'menu__option menu__option--active'
    : 'menu__option'
  element.addEventListener('click', clickEvent)

  const titleElement = document.createElement('h3')
  titleElement.className = 'menu__option__title'
  titleElement.textContent = title

  element.appendChild(icon)
  element.appendChild(titleElement)

  return element
}

export default MenuOption
