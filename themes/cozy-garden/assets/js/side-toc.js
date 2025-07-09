const sideToc = document.querySelector(".side-toc__child");
const sideTocItems = sideToc.querySelectorAll("nav > ul > li");
const positionEachItem = [...sideTocItems].map((item) => {
  const link = item.querySelector("a")
  const id = link.outerHTML.match(/\#(.*?)\"/i)[1];
  const el = document.querySelector(`#${id}`)
  return el.getBoundingClientRect().top + window.scrollY;
});

sideTocItems[0].classList.add("active");

window.addEventListener("scroll", () => {
  let indexOfActive = 0;
  for (const [index, item] of positionEachItem.entries()) {
    if (window.scrollY <= item) {
      indexOfActive = index;
      break;
    } 
  }
  sideTocItems.forEach((e, i) => {
    if(i == indexOfActive) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
})
