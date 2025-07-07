(function() {
  let oldValuePosition = 0;
  let oldDirection = "";
  const header = document.querySelector(".header");
  window.addEventListener("scroll", (e) => {

    if(window.scrollY == 0) {
        header.classList.remove("hide")
    }

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
