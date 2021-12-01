import '../scss/index.scss'
import Navbar from './components/Navbar'
import Main from './components/Main'
import ColorPicker from './components/ColorPicker'
import { generateContent } from './contentGenerator'

const container = document.querySelector('.container')
generateContent(container, Navbar)
generateContent(container, Main)
generateContent(container, ColorPicker.element)
