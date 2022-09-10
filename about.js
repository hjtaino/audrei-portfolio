// About Me
let pColor = ['#33A9AC','#FFA646','#F86041','#982062']
let highlights = document.getElementById("highlights");
let j = 0;
const timerHeaderText = setInterval( () => {
  if (j === 4){
    j = 0;
    highlights.style.color = pColor[j];
  } else {
    highlights.style.color = pColor[j];
  }
  j++;
}, 1000);

let container = document.getElementById("section-about-content");
let aboutMeText = document.getElementById("about-me-description");
let highlighted = document.getElementsByClassName("highlighted");
highlights.addEventListener("mouseover", function() {
  aboutMeText.style.color = 'black';
  container.style.backgroundImage = 'url("img/bg.jpg")';
  container.style.backgroundBlendMode = 'overlay';
  container.style.background = '#1D1D1D';
  Array.from(highlighted).forEach(function(item) {
   item.style.color = '#F86041';
  });
});

highlights.addEventListener("mouseout", function() {
  aboutMeText.style.color = '#33A9AC';
  container.style.background = '#343779';
  Array.from(highlighted).forEach(function(item) {
   item.style.color = '#33A9AC';
  });
});
