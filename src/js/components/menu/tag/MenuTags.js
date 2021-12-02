import EmptyMessage from '../../EmptyMessage'
import MenuTitle from '../MenuTitle'
import MenuTag from './MenuTag'
import NewTagBtn from './NewTagBtn'
import Menu from '../Menu'
import Tasks from '../../../data/tasks'
import Tags from '../../../data/tags'
import NewTaskForm from '../../task/NewTaskForm'

const MenuTags = (() => {
  let tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const filter = (tasks, tag) => tasks.filter((task) => task.tagId == tag.id)

  const generateTags = (tags) => {
    element.innerHTML = ''
    element.appendChild(MenuTitle('Tags'))
    tagElements = []

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'

      for (let tag of tags) {
        const tagElement = MenuTag(
          tag,
          () => {
            Menu.cleanActives()
            tagElement.addActiveClass()
          },
          filter(Tasks.getSortedTasks(), tag)
        )

        tagElements.push(tagElement)
        tagsContainer.appendChild(tagElement.element)
      }

      element.appendChild(tagsContainer)
    } else {
      element.appendChild(
        EmptyMessage(
          "It's pretty empty here 😕. Let's add a new tag with the button below!"
        )
      )
    }
    element.appendChild(
      NewTagBtn((tag) => {
        Tags.addTag(tag)
        NewTaskForm.updateTags(Tags.getTags())

        generateTags(Tags.getTags())
      })
    )
  }
  generateTags(Tags.getTags())

  const updateTasks = (updatedTasks) => {
    const tags = Tags.getTags()

    if (tags.length > 0) {
      for (let i = 0; i < tags.length; i++) {
        tagElements[i].updateTasks(filter(updatedTasks, tags[i]))
      }
    }
  }

  return { element, generateTags, tagElements, updateTasks }
})()

export default MenuTags
