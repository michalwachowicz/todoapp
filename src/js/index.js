import '../scss/index.scss'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { generateContent } from './contentGenerator'

const container = document.querySelector('.container')
generateContent(container, Navbar)
generateContent(container, Main)
