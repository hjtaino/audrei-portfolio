// Portfolio
let image = ['img/audrei.jpg','img/bg.jpg','img/index.png'];
let slideshow = document.getElementById("section-portfolio-pattern-1");
let dots = document.querySelectorAll(".dot");
let j = 0;
const timerHeaderText = setInterval( () => {
  slideshow.style.transition = '.5s';
  if (j === 3){
    j = 0;
    slideshow.style.backgroundImage = `url("${image[j]}")`;
    dots.forEach( (item, index) => {
      item.style.backgroundColor = '#bbb';
    });
    dots[j].style.backgroundColor = 'green';
  } else {
    slideshow.style.backgroundImage = `url("${image[j]}")`;
    dots.forEach( (item, index) => {
      item.style.backgroundColor = '#bbb';
    });
    dots[j].style.backgroundColor = 'green';
  }
  j++;
}, 2000);
