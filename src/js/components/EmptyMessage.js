const EmptyMessage = (text) => {
  const element = document.createElement('p')
  element.className = 'empty-message'
  element.textContent = text
  return element
}

export default EmptyMessage
