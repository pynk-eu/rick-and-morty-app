import {
  page,
  maxPage,
  incrementPage,
  decrementPage,
} from "../nav-pagination/nav-pagination.js";
import { searchQuery } from "../search-bar/search-bar.js";
import { fetchCharacters } from "../../index.js";

export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');

prevButton.addEventListener("click", () => {
  if (page > 1) {
    decrementPage();
    fetchCharacters(page, searchQuery);
  }
});

nextButton.addEventListener("click", () => {
  if (page <= maxPage) {
    incrementPage();
    fetchCharacters(page, searchQuery);
  }
});
