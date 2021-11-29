import InboxIcon from './icons/InboxIcon'
import TodayIcon from './icons/TodayIcon'
import NextDaysIcon from './icons/NextDaysIcon'
import MenuOption from './MenuOption'

const MenuOptions = (() => {
  const element = document.createElement('div')
  element.className = 'menu__options'

  const iconClass = 'menu__option__icon'
  element.appendChild(
    MenuOption(InboxIcon(iconClass), 'Inbox', false, (e) => console.log(e))
  )
  element.appendChild(
    MenuOption(TodayIcon(iconClass), 'Today', true, (e) => console.log(e))
  )
  element.appendChild(
    MenuOption(NextDaysIcon(iconClass), 'Next 7 days', false, (e) =>
      console.log(e)
    )
  )

  return element
})()

export default MenuOptions
