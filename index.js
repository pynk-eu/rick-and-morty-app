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
const fetchCharacters = async () => {
  try {
    const characters = await fetch(`https://rickandmortyapi.com/api/character`);
    const charactersData = await characters.json();
    const characterCards = await charactersData.results.map((character) =>
      createCharacterCard(character)
    );
    cardContainer.innerHTML = characterCards;
  } catch (error) {
    console.log(error);
  }
};

fetchCharacters();
