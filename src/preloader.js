import gsap from 'gsap';

class Preloader {
    constructor(agrs= ){
        this.backgroundColor = arguments.backgroundColor;
        this.preloader = document.getElementById('preloader');
    }
}

gsap.to('#preloader',{
  delay: 1,
  duration: 0.5,
  ease: 'power2.inOut',
  opacity:0,
  x: '100%'
 
})

/*
const preloader = document.getElementById('preloader');
setTimeout(() =>{
  preloader.classList.add('loaded');
},2000);*/