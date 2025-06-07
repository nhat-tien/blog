
function isSystemPreferDarkTheme() {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  return prefersDarkTheme.matches
}

let $html = document.querySelector("html");
const theme = localStorage.getItem("theme");
switch (theme) {
  case "light":
    $html.classList.remove("dark-theme");
    break;
  case "dark":
    $html.classList.add("dark-theme");
    break;
  case "system":
    const darkTheme = isSystemPreferDarkTheme();
    if (darkTheme) {
      $html.classList.add("dark-theme");
    } else {
      $html.classList.remove("dark-theme");
    }
    break;
}
