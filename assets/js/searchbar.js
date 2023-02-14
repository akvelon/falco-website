// (() => {
const [searchInputWrapper] = document.getElementsByClassName(
  "td-search-input__wrapper"
);
const [searchInput] =
  searchInputWrapper.getElementsByClassName("td-search-input");
const [searchInputClose] = searchInputWrapper.getElementsByClassName(
  "td-search-input__close-control"
);

const navbarItems = Array.from(document.getElementsByClassName("nav-show"));

searchInput.addEventListener("focus", () => {
  navbarItems.forEach((el) => el.classList.add("fade"));

  setTimeout(() => {
    navbarItems.forEach((el) => el.classList.add("nav-hide"));
    searchInputClose.classList.remove("collapse");
    searchInputWrapper.classList.add("container");
  }, 150);
});

searchInputClose.addEventListener("click", () => {
  Array.from(navbarItems).forEach((el) =>
    el.classList.remove("nav-hide", "fade")
  );
  searchInputWrapper.classList.remove("container");
  searchInputClose.classList.add("collapse");
  searchInput.value = '';
});

// searchInput.addEventListener("blur", () => {
//   console.log('blur', searchInput.value)
//   if (!searchInput.value) {
//     Array.from(showItems).forEach((el) =>
//       el.classList.remove("collapse", "fade")
//     );
//     searchInputWrapper.classList.remove("container");
//   }
// });
// })();

// Adapted from code by Matt Walters https://www.mattwalters.net/posts/2018-03-28-hugo-and-lunr/
