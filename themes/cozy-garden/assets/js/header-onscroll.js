(function() {
  let oldValuePosition = 0;
  let oldDirection = "";
  const header = document.querySelector(".header");
  const floatMenu = document.querySelector(".float-menu");
  window.addEventListener("scroll", (e) => {

    if(window.scrollY == 0) {
        header.classList.remove("hide")
        floatMenu.classList.remove("show")
    }

    const delta = window.scrollY - oldValuePosition;
    const direction = delta > 0 ? "DOWN" : "UP";

    if(direction != oldDirection) {
      if(direction == "DOWN") {
        header.classList.add("hide")
        floatMenu.classList.add("show")
      } else {
        header.classList.remove("hide")
        floatMenu.classList.remove("show")
      }
      oldDirection = direction;
    }

    oldValuePosition = window.scrollY;
  })
})()
