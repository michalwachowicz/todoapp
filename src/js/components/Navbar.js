import MenuIcon from './icons/MenuIcon'
import AddIcon from './icons/AddIcon'
import Menu from './menu/Menu'
import NewTaskForm from './task/NewTaskForm'

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

  const addIcon = AddIcon('header__icon header__icon--add')
  addIcon.addEventListener('click', () => NewTaskForm.updateForm(null))

  navBar.appendChild(menuIcon)
  navBar.appendChild(title)
  navBar.appendChild(addIcon)
  header.appendChild(navBar)

  return header
})()

export default Navbar
