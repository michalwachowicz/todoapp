export const cleanContent = (node) => {
  node.innerHTML = node
}

export const generateContent = (node, content) => {
  node.appendChild(content)
}
