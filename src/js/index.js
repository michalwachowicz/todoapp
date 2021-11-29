import '../scss/index.scss'
import Navbar from './components/Navbar'
import { generateContent } from './contentGenerator'

const container = document.querySelector('.container')
generateContent(container, Navbar)
