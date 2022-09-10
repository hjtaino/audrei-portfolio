const get_date = new Date();
let year = get_date.getFullYear();

let yearText = document.getElementById("year");
yearText.innerHTML = year;

let email = document.getElementById("mail");
email.onclick = function() {
  document.execCommand("copy");
}

email.addEventListener("copy", (e) => {
  e.preventDefault();
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", 'harveytaino01@gmail.com');
  }
});
let facebook = document.getElementById("facebook");
facebook.addEventListener("click", function() {
  window.open("https://www.facebook.com/theRoshRuns", "_blank");
});


let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/audrei-roshaun-perez-5a7b6020b/");
});

// Home
let main = document.getElementById("section-about-content-main");
let round = document.getElementById("round");
let mainText1 = document.getElementById("main-text-1");
let mainText2 = document.getElementById("main-text-2");
round.addEventListener('mouseover', function handleMouseOver() {
  main.style.background = '#F86041';
  main.style.backgroundImage = 'url("img/bg.jpg")';
  mainText1.style.color = '#FD9F9D';
  mainText2.style.color = '#FD9F9D';
  mainText1.innerHTML = 'Hi there!';
  mainText2.innerHTML = 'I\'m Rosh <i class="fas fa-smile-beam"></i>';
});

round.addEventListener('mouseout', function handleMouseOut() {
  main.style.background = '#343779';
  main.style.backgroundImage = 'url("img/bg.jpg")';
  main.style.backgroundBlendMode = 'darken';
  mainText1.style.color = '#33A9AC';
  mainText2.style.color = '#33A9AC';
  mainText1.innerHTML = 'Audrei';
  mainText2.innerHTML = 'Roshaun';
});
