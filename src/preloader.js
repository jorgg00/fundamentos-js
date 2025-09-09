import gsap from 'gsap';

export default class Preloader {
    constructor(args={}) {
        this.backgroundColor = args.backgroundColor || 'blue';
        this.preloader = document.getElementById('preloader');
        this.preloader.style.backgroundColor = this.backgroundColor;
    }

    show() {
        gsap.to(this.preloader, {
            duration: 1,
            ease: 'power2.inOut',
            opacity:1,
            y: '100%'
    })
    
}

hide() {
    gsap.to(this.preloader,{
        duration: 1,
        ease: 'power2.inOut',
        opacity:0,
        y: '100%'
})
 }
}

/*
const preloader = document.getElementById('preloader');
setTimeout(() =>{
  preloader.classList.add('loaded');
},2000);*/