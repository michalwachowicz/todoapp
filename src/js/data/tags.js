// id, title, color
const Tags = (() => {
  const tags = localStorage.getItem('tags') ? JSON.parse(localStorage.tags) : []
  let lastId = tags.length > 0 ? tags[tags.length - 1].id : -1

  const saveToStorage = () => (localStorage.tags = JSON.stringify(tags))

  const getTagById = (id) => tags.find((tag) => tag.id == id)
  const getTags = () => tags
  const getLastId = () => lastId

  const addTag = (tag) => {
    tags.push(tag)
    saveToStorage()

    lastId++
  }

  const removeTag = (id) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index > -1) {
      tags.splice(index, 1)
      saveToStorage()
    }
  }

  const updateTag = (id, tag) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index > -1) {
      tags.splice(id, 1, tag)
      saveToStorage()
    }
  }

  return { getTagById, getTags, getLastId, addTag, removeTag, updateTag }
})()

export default Tags
