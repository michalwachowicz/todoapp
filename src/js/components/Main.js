import Menu from './menu/Menu'
import TasksView from './task/TasksView'
import MenuOptions from './menu/option/MenuOptions'

const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(Menu.element)
  main.appendChild(TasksView.element)
  MenuOptions.menuOptions[0].element.click()

  return main
})()

export default Main
