import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//test
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function init() {

    let tl = gsap.timeline();
    // animate .ci
    tl.to('.circle', {
        motionPath: {
            path: '#map-svg path',
            align: '#map-svg path',
            alignOrigin: [0.5, 0.5],
            // start: 0,
            // end: 0.3333,
        },
        scrollTrigger: {
            trigger: ".test-map",
            start: "top top",
            end: "+=1000px", // Nombre de pixels scrollés pour produire l'animation
            scrub: 1,
            pin: true,
            markers: true,
        },
        ease: "none",
        // duration: 20
    });
}

gsap.ticker.add(() =>
    gsap.to(".test-map", {
        duration: 0.5,
        x: -gsap.getProperty(".circle", "x") * 0.5,
        y: -gsap.getProperty(".circle", "y") * 0.5,
    })
);

// window.onload = window.onresize = () => {
//     gsap.set(".test-map", {
//         left: window.innerWidth / 2,
//         top: window.innerHeight / 2
//     });
// };

document.addEventListener("DOMContentLoaded", init);



// overlay 1

var html = document.querySelector('html');
var story1 = document.querySelector('#button1');
var overlay1 = document.querySelector('#overlay1');

story1.addEventListener('click', function () {
    overlay1.classList.remove('overlay-hidden');
    html.classList.add('scroll-lock');
})

overlay1.addEventListener('click', function () {
    overlay1.classList.add('overlay-hidden');
    html.classList.remove('scroll-lock');
})

// overlay 2

var story2 = document.querySelector('#button2');
var overlay2 = document.querySelector('#overlay2');

story2.addEventListener('click', function () {
    overlay2.classList.remove('overlay-hidden');
    html.classList.add('scroll-lock');
})

overlay2.addEventListener('click', function () {
    overlay2.classList.add('overlay-hidden');
    html.classList.remove('scroll-lock');
})