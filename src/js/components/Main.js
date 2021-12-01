import Menu from './menu/Menu'
import TasksView from './TasksView'

const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(Menu.element)
  main.appendChild(TasksView.element)

  return main
})()

export default Main
