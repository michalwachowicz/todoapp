import Tasks from '../../../data/tasks'
import Menu from '../Menu'
import MenuTitle from '../MenuTitle'
import MenuPriority from './MenuPriority'

const MenuPriorities = (() => {
  const priorities = [
    { id: 0, color: '#94D82D', title: 'Low' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#FF6B6B', title: 'High' },
  ]
  const priorityElements = []

  const element = document.createElement('div')
  element.className = 'menu__priorities-container'

  const filter = (tasks, priority) =>
    tasks.filter((task) => task.priorityId == priority.id)

  const generatePriorities = () => {
    const prioritiesContainer = document.createElement('div')
    prioritiesContainer.className = 'menu__priorities'

    for (let priority of priorities) {
      const priorityElement = MenuPriority(
        priority,
        () => {
          Menu.cleanActives()
          priorityElement.addActiveClass()
        },
        filter(Tasks.getSortedTasks(), priority)
      )

      priorityElements.push(priorityElement)
      prioritiesContainer.appendChild(priorityElement.element)
    }

    element.innerHTML = ''
    element.appendChild(MenuTitle('Priorities'))
    element.appendChild(prioritiesContainer)
  }
  generatePriorities(priorities)

  const getPriorityById = (id) =>
    priorities.find((priority) => priority.id == id)

  const clearActives = () => {
    priorityElements.forEach((priorityElement) =>
      priorityElement.removeActiveClass()
    )
  }

  const updateTasks = (updatedTasks) => {
    for (let i = 0; i < priorities.length; i++) {
      priorityElements[i].updateTasks(filter(updatedTasks, priorities[i]))
    }
  }

  return {
    element,
    clearActives,
    getPriorityById,
    priorityElements,
    updateTasks,
  }
})()

export default MenuPriorities
