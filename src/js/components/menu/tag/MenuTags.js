import EmptyMessage from '../../EmptyMessage'
import MenuTitle from '../MenuTitle'
import MenuTag from './MenuTag'

const MenuTags = (() => {
  const dummyTags = [
    { id: 0, color: '#4DABF7', title: 'Work' },
    { id: 1, color: '#DA77F2', title: 'School' },
    { id: 2, color: '#FFD43B', title: 'Personal' },
  ]
  const tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const generateTags = (tags) => {
    element.innerHTML = ''
    element.appendChild(MenuTitle('Tags'))

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'

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
  }
  // generateTags(dummyTags)
  generateTags([])

  return { element, generateTags }
})()

export default MenuTags
