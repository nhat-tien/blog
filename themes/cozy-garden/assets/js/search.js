const searchBox = document.getElementById("search-query");
const searchResult = document.getElementById("search-results");
var index = {};

const options = {
  keys: ["title"],
};

function executeSearch() {
    const fuse = new Fuse(index, options);
    const listOfResult = fuse.search(searchBox.value);
    render(listOfResult);
}

function render(listOfResult) {
  let searchItem = "";
  for (result of listOfResult) {
    searchItem += `
      <a class="post" href="${result.item.permalink}">
          <h3 class="search-item">${result.item.title}</h3>
		  </a>`;
  }
  searchResult.innerHTML = searchItem;
}

fetch("/index.json")
  .then((res) => res.json())
  .then((data) => (index = data))
  .catch((e) => console.error("Something went wrong with search feature"));

searchBox.addEventListener("input", () => executeSearch());
