const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toogleIcon = document.getElementById("toogle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toogleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toogleDarkLightMode(true);
  }
};

function toogleDarkLightMode(isLight) {
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toogleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toogleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toogleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  isLight ? changeImgSource(image1, "light") : changeImgSource(image1, "dark");
  isLight ? changeImgSource(image2, "light") : changeImgSource(image2, "dark");
  isLight ? changeImgSource(image3, "light") : changeImgSource(image3, "dark");
}

const changeImgSource = (element, color) => {
  element.src = `img/undraw_proud_coder_${color}.svg`;
};

toogleSwitch.addEventListener("change", switchTheme);

// Check Local Storafe for Theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toogleDarkLightMode(false);
    toogleSwitch.checked = true;
  }
}
