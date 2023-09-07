import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const pagination = document.querySelector('[data-js="pagination"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

let maxPage;
let page = 1;
let searchQuery = "";

const fetchCharacters = async (pageNumber = 1, searchQuery = "") => {
  try {
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchQuery}`
    );
    const charactersData = await characters.json();
    const characterCards = await charactersData.results
      .map((character) => createCharacterCard(character))
      .join("");
    cardContainer.innerHTML = characterCards;

    maxPage = charactersData.info.pages;
    pagination.textContent = `${pageNumber} / ${maxPage}`;

    determinePaginationButtonsState(pageNumber, maxPage);
  } catch (error) {
    console.log(error);
    cardContainer.innerHTML = `<p class="error-message">Sorry, character with name "${searchQuery}" not found!</p>`;
    determinePaginationButtonsState(1, 1);
    pagination.textContent = "1 / 1";
  }
};

const determinePaginationButtonsState = (currentPage, maxPage) => {
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentPage === maxPage) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
};

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters(page, searchQuery);
  }
});

nextButton.addEventListener("click", () => {
  if (page <= maxPage) {
    page += 1;
    fetchCharacters(page, searchQuery);
  }
});

searchBarInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchCharacters(page, searchQuery);
});

document.addEventListener("click", (event) => {
  const card = event.target.closest('[data-js="card"]');
  if (card) {
    card.classList.toggle("m-show");
  }
});

fetchCharacters();
