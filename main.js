function goTo(selector) {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function addClick(selector, target) {
  document.querySelectorAll(selector).forEach(function (element) {
    element.style.cursor = "pointer";
    element.addEventListener("click", function (e) {
      e.preventDefault();
      goTo(target);
    });
  });
}

const navTargets = [".hero", ".collection", ".projects", ".craft", ".footer"];
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link, index) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    goTo(navTargets[index]);

    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

addClick(".header .btn", ".footer");
addClick(".hero .btn", ".collection");
addClick(".hero .link", ".craft");
addClick(".hero .scroll", ".collection");
addClick(".cta .btn", ".footer");