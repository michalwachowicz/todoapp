import InboxIcon from '../../icons/InboxIcon'
import TodayIcon from '../../icons/TodayIcon'
import NextDaysIcon from '../../icons/NextDaysIcon'
import MenuOption from './MenuOption'
import Menu from '../Menu'
import Tasks from '../../../data/tasks'

const MenuOptions = (() => {
  const iconClass = 'menu__option__icon'
  const element = document.createElement('div')
  const menuOptions = [
    MenuOption(
      InboxIcon(iconClass),
      'Inbox',
      Tasks.getSortedTasks().filter(
        (task) => task.tagId < 0 && task.priorityId < 0 && task.dueDate == null
      )
    ),
    MenuOption(
      TodayIcon(iconClass),
      'Today',
      Tasks.getSortedTasks().filter((task) => {
        const currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)
        return task.dueDate && task.dueDate.getDate() <= currentDate.getDate()
      })
    ),
    MenuOption(
      NextDaysIcon(iconClass),
      'Next 7 days',
      Tasks.getSortedTasks().filter((task) => {
        let date = new Date()
        date.setDate(date.getDate() + 7)
        date.setHours(0, 0, 0, 0)

        return task.dueDate && task.dueDate.getDate() <= date.getDate()
      })
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

  return { element, menuOptions }
})()

export default MenuOptions
