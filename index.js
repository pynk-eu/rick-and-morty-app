import { createCharacterCard } from "./components/card/card.js";
import { determinePaginationButtonsState } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export const fetchCharacters = async (pageNumber = 1, searchQuery = "") => {
  try {
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchQuery}`
    );
    const charactersData = await characters.json();
    const characterCards = await charactersData.results
      .map((character) => createCharacterCard(character))
      .join("");
    cardContainer.innerHTML = characterCards;
    determinePaginationButtonsState(pageNumber, charactersData.info.pages);
  } catch (error) {
    console.log(error);
    cardContainer.innerHTML = `<p class="error-message">Sorry, character with name "${searchQuery}" not found!</p>`;
    determinePaginationButtonsState(1, 1);
  }
};

document.addEventListener("click", (event) => {
  const card = event.target.closest('[data-js="card"]');
  if (card) {
    card.classList.toggle("m-show");
  }
});

fetchCharacters();
