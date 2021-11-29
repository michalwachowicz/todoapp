const Icon = (src, alt, classes) => {
  const img = document.createElement('img')

  img.src = src
  img.alt = alt
  img.className = classes

  return img
}

export default Icon
