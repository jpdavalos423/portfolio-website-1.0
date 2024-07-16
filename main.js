const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElements.forEach((el) => Observer.observe(el));
hiddenElementsLeft.forEach((el) => Observer.observe(el));
hiddenElementsRight.forEach((el) => Observer.observe(el));

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["frontend developer", "musician", "software developer"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.getElementById("typewriter").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2500);
    }
    // check if dataText[i] exists
    try {
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    } catch (e) {}
  }
  // start the text animation
  StartTextAnimation(0);
});

let menu = document.querySelector(".menu-button");
let navbar = document.querySelector(".nav-bar-links");
let navlink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}
