const codeBlocks = document.querySelectorAll(".highlight");

const iconTick = `
<svg viewBox="0 0 24 24"  height="20px" width="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_iconCarrier"> 
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="#45ff48">
    </path> 
    </g>
</svg>
`;

const iconCopy = `
<svg version="1.1" height="20px" width="20px"
    viewBox="0 0 32 32" xml:space="preserve" fill="#fff">
    <g id="SVGRepo_iconCarrier">
      <path class="stone_een"
        d="M10,6c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2.184 C18.403,0.837,17.304,0,16,0s-2.403,0.837-2.816,2H11c-0.552,0-1,0.448-1,1V6z M28,6v23c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3 V6c0-1.657,1.343-3,3-3h2v2H7C6.448,5,6,5.448,6,6v23c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1V6c0-0.552-0.448-1-1-1h-2V3h2 C26.657,3,28,4.343,28,6z M23,6c0,1.103-0.897,2-2,2H11C9.897,8,9,7.103,9,6H7v23h18V6H23z M19.5,19h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,18.776,19.776,19,19.5,19z M19.5,17h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,16.776,19.776,17,19.5,17z M19.5,15h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,14.776,19.776,15,19.5,15z">
      </path>
    </g>
  </svg>
`

codeBlocks.forEach(e => {
  const btns = e.querySelector(".copy-btn");
  const isNoLang = e.querySelector("pre").classList.contains("non-lang");
  const code = e.querySelector("code");

  btns.addEventListener("click", () => {
    let text = code.innerText;

    if(!isNoLang) {
      text = code.innerText.split("\n").filter((_, i) => i%2 == 0).join("\n");
    }
    navigator.clipboard.writeText(text);

    btns.innerHTML = iconTick;

    setTimeout(() => btns.innerHTML = iconCopy, 3000);
  })
});
