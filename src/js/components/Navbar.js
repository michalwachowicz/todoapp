import MenuIcon from './icons/MenuIcon'
import AddIcon from './icons/AddIcon'
import Menu from './menu/Menu'

const Navbar = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const navBar = document.createElement('nav')
  navBar.className = 'navbar'

  const title = document.createElement('h2')
  title.className = 'header__title'
  title.textContent = 'TodoApp'

  const menuIcon = MenuIcon('header__icon header__icon--menu')
  menuIcon.addEventListener('click', Menu.toggleHide)

  navBar.appendChild(menuIcon)
  navBar.appendChild(title)
  navBar.appendChild(AddIcon('header__icon header__icon--add'))
  header.appendChild(navBar)

  return header
})()

export default Navbar
