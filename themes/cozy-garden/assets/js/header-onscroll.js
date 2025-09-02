(function() {
  let oldValuePosition = 0;
  let oldDirection = "";
  const header = document.querySelector("header");
  const checkbox = document.querySelector(".menu-icon__checkbox");
  const floatMenu = document.querySelector(".float-menu");
  window.addEventListener("scroll", (e) => {

    if(window.scrollY == 0 || checkbox.checked) {
        header.classList.remove("hide");
        floatMenu.classList.remove("show");
      return;
    }
      
    floatMenu.classList.add("show")

    const delta = window.scrollY - oldValuePosition;
    const direction = delta > 0 ? "DOWN" : "UP";

    if(direction != oldDirection) {
      if(direction == "DOWN") {
        header.classList.add("hide")
      } else {
        header.classList.remove("hide")
      }
      oldDirection = direction;
    }

    oldValuePosition = window.scrollY;
  })
})()
