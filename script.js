const toogleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toogleIcon = document.getElementById("toogle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem("theme", DARK_THEME);
    toogleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem("theme", LIGHT_THEME);
    toogleDarkLightMode(LIGHT_THEME);
  }
};

function toogleDarkLightMode(mode) {
  nav.style.backgroundColor =
    mode === LIGHT_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor =
    mode === LIGHT_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  toogleIcon.children[0].textContent =
    mode === LIGHT_THEME ? "Light Mode" : "Dark Mode";
  mode === LIGHT_THEME
    ? toogleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toogleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  mode === LIGHT_THEME
    ? changeImgSource(image1, LIGHT_THEME)
    : changeImgSource(image1, DARK_THEME);
  mode === LIGHT_THEME
    ? changeImgSource(image2, LIGHT_THEME)
    : changeImgSource(image2, DARK_THEME);
  mode === LIGHT_THEME
    ? changeImgSource(image3, LIGHT_THEME)
    : changeImgSource(image3, DARK_THEME);
}

const changeImgSource = (element, color) => {
  element.src = `img/undraw_proud_coder_${color}.svg`;
};

toogleSwitch.addEventListener("change", switchTheme);

// Check Local Storafe for Theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === DARK_THEME) {
    toogleDarkLightMode(DARK_THEME);
    toogleSwitch.checked = true;
  }
}
