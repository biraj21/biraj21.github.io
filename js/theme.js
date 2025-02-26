const THEME_DARK = "dark";
const THEME_LIGHT = "light";

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || THEME_DARK;
  if (theme === THEME_DARK) {
    document.body.classList.add(THEME_DARK);
  } else {
    document.body.classList.remove(THEME_DARK);
  }

  // add theme switcher button to the DOM with fixed position
  const $themeSwitcher = document.createElement("button");
  $themeSwitcher.innerText = "🌓";

  // css for .theme-switcher is available in /styles.css
  $themeSwitcher.classList.add("theme-switcher", "no-print");
  $themeSwitcher.onclick = toggleTheme;

  document.body.insertBefore($themeSwitcher, document.body.firstChild);
});

function toggleTheme() {
  const theme = localStorage.getItem("theme") || THEME_DARK;
  if (theme === THEME_DARK) {
    localStorage.setItem("theme", THEME_LIGHT);
    document.body.classList.remove(THEME_DARK);
  } else {
    localStorage.setItem("theme", THEME_DARK);
    document.body.classList.add(THEME_DARK);
  }
}
