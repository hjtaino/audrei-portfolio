const menu = document.querySelectorAll('.nav-item');
// const menuResponsive = document.querySelectorAll('.nav-item-full');
// const menuBtn = document.querySelector('.menu-btn');
// const fullMenu = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close-btn');

let base = location.origin;

menu.forEach( (item, index) => {
  item.addEventListener('click', (e) => {
    if (index === 0) {
      location.href = base;
    }
    else if (index === 1) {
      location.href = `${base}/about.html`;
    }
    else if (index === 2) {
      location.href = `${base}/portfolio.html`;
    }
    else if (index === 3) {
      location.href = `${base}/resume.html`;
    }
    else if (index === 4) {
      location.href = `${base}/contact.html`;
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
