const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
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
