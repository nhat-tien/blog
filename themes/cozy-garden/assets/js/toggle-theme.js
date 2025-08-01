let $toggleIcon = document.querySelector("#toggle-theme-icon");
let $toggleButton = document.querySelector("#toggle-theme-button");
let $floatMenu = document.querySelector(".float-menu");

setIconDependCurrentTheme();

function setIconDependCurrentTheme() {
const theme = localStorage.getItem("theme");
  switch (theme) {
    case "light":
      changeIconTheme("day", $toggleIcon);
      break;
    case "dark":
      changeIconTheme("night", $toggleIcon);
      break;
    case "system":
      changeIconTheme("system", $toggleIcon);
      break;
  }
}

function toggleOpen(e) {

  const themeSelector = document.querySelector(".theme-selector");

  function handleClickOutside(e) {
      if(!$toggleButton.contains(e.target)) {
        themeSelector.style.animationName = "hide-theme-selector";
        setIconDependCurrentTheme();
        setTimeout(() => {
          themeSelector.classList.remove("show")
        }, 100);
        window.removeEventListener("click", handleClickOutside);
      }
  }
  if(e){
    e.stopPropagation();
  }
  if (themeSelector.classList.contains("show")) {
    themeSelector.style.animationName = "hide-theme-selector";
    setIconDependCurrentTheme();
    setTimeout(() => {
      themeSelector.classList.remove("show")
    }, 100);
  } else {
    themeSelector.style.animationName = "show-theme-selector";
    changeIconTheme("hide", $toggleIcon);
    setTimeout(() => {
      themeSelector.classList.add("show")
    }, 100);

    window.addEventListener("click", handleClickOutside)
  }
}

function setTheme(theme) {
  let $html = document.querySelector("html");

  const updateTheme = () => {
    switch (theme) {
      case "light":
        $html.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        $html.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        break;
      case "system":
        const darkTheme = isSystemPreferDarkTheme();
        if (darkTheme) {
          $html.classList.add("dark-theme");
        } else {
          $html.classList.remove("dark-theme");
        }
        localStorage.setItem("theme", "system");
        break;
    }
  }

  if(!document.startViewTransition) {
    updateTheme();
    toggleOpen();
    return;
  }

  document.startViewTransition(() => {
    updateTheme();
    toggleOpen();
  });
}

/**
 * 
 * @param {string} theme 
 * @param {HTMLDivElement} element 
 */
function changeIconTheme(theme, element) {
  if (theme == 'day') {
    element.innerHTML = `
        <svg fill="var(--icon_floatmenu_color)" width="20px" height="20px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
        </svg>
        `;
  } else if (theme == "night") {
    element.innerHTML = `
        <svg  width="20px" height="20px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="var(--icon_floatmenu_color)" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
        </svg>
        `
  } else if (theme == "system") {
    element.innerHTML = `
        <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--icon_floatmenu_color)">
          <path fill-rule="evenodd"
            d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
            clip-rule="evenodd" />
        </svg>
    `
  } else {
    element.innerHTML = `
       <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="var(--icon_floatmenu_color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
       </svg>
    `
  }
}

$toggleButton.addEventListener("click", toggleOpen);
