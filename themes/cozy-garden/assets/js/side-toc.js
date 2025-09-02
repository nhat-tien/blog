const sideToc = document.querySelector(".side-toc__child");
const sideTocItems = sideToc.querySelectorAll("nav > ul > li");

function hightlightActiveHeading() {
  const headings = document.querySelectorAll("article h2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const headingId = entry.target.id;
        sideTocItems.forEach(item => {
          item.classList.remove("active");
          const href = item.querySelector("a");
          if (href.getAttribute("href") == `#${headingId}`) {
            item.classList.add("active");
          }
        })
      }
    })
  },
    {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.1
    }
  );

  headings.forEach(h => observer.observe(h));
}

hightlightActiveHeading();
