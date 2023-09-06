import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Fetch data
const fetchCharacters = async (pageNumber = 1) => {
  try {
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );
    const charactersData = await characters.json();
    const characterCards = await charactersData.results.map((character) =>
      createCharacterCard(character)
    );
    cardContainer.innerHTML = characterCards;

    maxPage = charactersData.info.pages;
    pagination.textContent = `${pageNumber} / ${maxPage}`;
  } catch (error) {
    console.log(error);
  }
};

fetchCharacters();

// Pagination
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", () => {
  if (page <= maxPage) {
    page += 1;
    fetchCharacters(page);
  }
});
