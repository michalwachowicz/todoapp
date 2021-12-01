import Menu from './menu/Menu'
import TasksView from './task/TasksView'

const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(Menu.element)
  main.appendChild(TasksView.element)

  TasksView.generateTasks('Today', [
    // {
    //   title: 'Test',
    //   description: 'Test description',
    //   dueDate: new Date(2021, 5, 2),
    //   priorityId: 0,
    //   tagId: 0,
    //   done: false,
    // },
    // {
    //   title: 'Test 2',
    //   description: 'Test description',
    //   dueDate: new Date(2021, 12, 1),
    //   priorityId: 2,
    //   tagId: 0,
    //   done: false,
    // },
  ])

  return main
})()

export default Main
