const menu = document.querySelectorAll('.nav-item');
// const menuResponsive = document.querySelectorAll('.nav-item-full');
// const menuBtn = document.querySelector('.menu-btn');
// const fullMenu = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close-btn');

let base = location.origin;
let github = 'audrei-portfolio';

menu.forEach( (item, index) => {
  item.addEventListener('click', (e) => {
    if (index === 0) {
      location.href = `${base}/${github}/index.html`;
    }
    else if (index === 1) {
      location.href = `${base}/${github}/about.html`;
    }
    else if (index === 2) {
      location.href = `${base}/${github}/portfolio.html`;
    }
    else if (index === 3) {
      location.href = `${base}/${github}/resume.html`;
    }
    else if (index === 4) {
      location.href = `${base}/${github}/contact.html`;
    }
  });
});

// menuResponsive.forEach( (item, index) => {
//   item.addEventListener('click', (e) => {
//     if (index === 0) {
//       location.href = base;
//     }
//     else if (index === 1) {
//       location.href = `${base}/pages/education.html`;
//     }
//     else if (index === 2) {
//       location.href = `${base}/pages/career.html`;
//     }
//     else if (index === 3) {
//       location.href = `${base}/pages/skills.html`;
//     }
//     else if (index === 4) {
//       location.href = `${base}/pages/projects.html`;
//     }
//     else if (index === 5) {
//       location.href = `${base}/pages/contact.html`;
//     }
//   });
// });
//
// menuBtn.addEventListener('click', (e) => {
//   fullMenu.style.height = "100%";
// });
//
// closeBtn.addEventListener('click', (e) => {
//   fullMenu.style.height = "0%";
// });
