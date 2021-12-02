import InboxIcon from '../../icons/InboxIcon'
import TodayIcon from '../../icons/TodayIcon'
import NextDaysIcon from '../../icons/NextDaysIcon'
import MenuOption from './MenuOption'
import Menu from '../Menu'
import Tasks from '../../../data/tasks'

const MenuOptions = (() => {
  const iconClass = 'menu__option__icon'
  const element = document.createElement('div')

  const filterFunctions = [
    (updatedTasks) =>
      updatedTasks.filter(
        (task) => task.tagId < 0 && task.priorityId < 0 && task.dueDate == null
      ),
    (updatedTasks) =>
      updatedTasks.filter((task) => {
        const currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)
        return task.dueDate && task.dueDate.getDate() <= currentDate.getDate()
      }),
    (updatedTasks) =>
      updatedTasks.filter((task) => {
        let date = new Date()
        date.setDate(date.getDate() + 7)
        date.setHours(0, 0, 0, 0)

        return task.dueDate && task.dueDate.getDate() <= date.getDate()
      }),
  ]

  let tasks = Tasks.getSortedTasks()
  const menuOptions = [
    MenuOption(InboxIcon(iconClass), 'Inbox', filterFunctions[0](tasks)),
    MenuOption(TodayIcon(iconClass), 'Today', filterFunctions[1](tasks)),
    MenuOption(
      NextDaysIcon(iconClass),
      'Next 7 days',
      filterFunctions[2](tasks)
    ),
  ]
  element.className = 'menu__options'

  menuOptions.forEach((menuOption) => {
    menuOption.addClickEvent(() => {
      Menu.cleanActives()
      menuOption.addActiveClass()
    })
    element.appendChild(menuOption.element)
  })

  const updateTasks = (updatedTasks) => {
    tasks = updatedTasks

    for (let i = 0; i < menuOptions.length; i++) {
      menuOptions[i].updateTasks(filterFunctions[i](tasks))
    }
  }

  return { element, menuOptions, updateTasks }
})()

export default MenuOptions
