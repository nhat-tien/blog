const codeBlocks = document.querySelectorAll(".highlight");

codeBlocks.forEach(e => {
  const language = e.querySelector("code").getAttribute("data-lang");
  const divLanguage = document.createElement("div");
  divLanguage.className = "decoration-language";
  divLanguage.innerText = language;
  e.appendChild(divLanguage)
});
