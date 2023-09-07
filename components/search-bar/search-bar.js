import { fetchCharacters } from "../../index.js";
import { page } from "../nav-pagination/nav-pagination.js";
export let searchQuery = "";

const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
const searchBar = document.querySelector('[data-js="search-bar"]');

searchBarInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchCharacters(page, searchQuery);
});
