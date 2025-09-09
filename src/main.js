import './style.css'
import Preloader from './preloader'

const preloader = new Preloader({
  backgroundColor: 'orange'
})

window.addEventListener('load', () =>{
  preloader.hide()
})



