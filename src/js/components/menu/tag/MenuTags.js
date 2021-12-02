import EmptyMessage from '../../EmptyMessage'
import MenuTitle from '../MenuTitle'
import MenuTag from './MenuTag'
import NewTagBtn from './NewTagBtn'
import Menu from '../Menu'
import Tasks from '../../../data/tasks'

const MenuTags = (() => {
  const tags = localStorage.getItem('tags') ? JSON.parse(localStorage.tags) : []
  let tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const generateTags = (tags) => {
    element.innerHTML = ''
    element.appendChild(MenuTitle('Tags'))

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'
      tagElements = []

      for (let tag of tags) {
        const tagElement = MenuTag(
          tag,
          () => {
            Menu.cleanActives()
            tagElement.addActiveClass()
          },
          Tasks.getSortedTasks().filter((task) => task.tagId == tag.id)
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
        const id =
          tags.length > 0 && tags[tags.length - 1].id
            ? tags[tags.length - 1].id + 1
            : 0

        tags.push({ id: id, ...tag })
        localStorage.tags = JSON.stringify(tags)

        generateTags(tags)
      })
    )
  }
  generateTags(tags)

  const getTagById = (id) => tags.find((tag) => tag.id == id)

  return { element, generateTags, getTagById, tagElements }
})()

export default MenuTags
