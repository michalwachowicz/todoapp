export const cleanContent = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

export const generateContent = (node, content) => {
  node.appendChild(content)
}
