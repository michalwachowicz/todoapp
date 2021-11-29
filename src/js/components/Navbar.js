import MenuIcon from './icons/MenuIcon'
import AddIcon from './icons/AddIcon'

const Navbar = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const navBar = document.createElement('nav')
  navBar.className = 'navbar'

  const title = document.createElement('h2')
  title.className = 'header__title'
  title.textContent = 'TodoApp'

  navBar.appendChild(MenuIcon('header__icon header__icon--menu'))
  navBar.appendChild(title)
  navBar.appendChild(AddIcon('header__icon header__icon--add'))
  header.appendChild(navBar)

  return header
})()

export default Navbar
