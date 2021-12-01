import MenuTitle from '../MenuTitle'
import MenuPriority from './MenuPriority'

const MenuPriorities = (() => {
  const priorities = [
    { id: 0, color: '#FF6B6B', title: 'High' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#94D82D', title: 'Low' },
  ]
  const priorityElements = []

  const element = document.createElement('div')
  element.className = 'menu__priorities-container'

  const generatePriorities = () => {
    const prioritiesContainer = document.createElement('div')
    prioritiesContainer.className = 'menu__priorities'

    for (let priority of priorities) {
      const priorityElement = MenuPriority(priority, (e) => console.log(e))

      priorityElements.push(priorityElement)
      prioritiesContainer.appendChild(priorityElement.element)
    }

    element.innerHTML = ''
    element.appendChild(MenuTitle('Priorities'))
    element.appendChild(prioritiesContainer)
  }
  generatePriorities(priorities)

  const clearActives = () => {
    priorityElements.forEach((priorityElement) =>
      priorityElement.removeActiveClass()
    )
  }
  return { element, clearActives }
})()

export default MenuPriorities
