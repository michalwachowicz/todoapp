import EmptyMessage from '../../EmptyMessage'
import MenuTitle from '../MenuTitle'
import MenuTag from './MenuTag'
import NewTagBtn from './NewTagBtn'

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
        const tagElement = MenuTag(tag, (e) => console.log(e))

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
        const lastId = tags[tags.length - 1]
        const id = tags.length > 0 && lastId ? lastId + 1 : 0

        tags.push({ id: id, ...tag })
        localStorage.tags = JSON.stringify(tags)

        generateTags(tags)
      })
    )
  }
  generateTags(tags)

  return { element, generateTags }
})()

export default MenuTags
