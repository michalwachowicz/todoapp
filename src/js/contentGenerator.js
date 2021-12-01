export const cleanContent = (node) => {
  node.innerHTML = ''
}

export const generateContent = (node, content) => {
  node.appendChild(content)
}
