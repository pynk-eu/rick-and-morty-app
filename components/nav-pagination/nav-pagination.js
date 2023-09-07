import { prevButton, nextButton } from "../nav-button/nav-button.js";

const pagination = document.querySelector('[data-js="pagination"]');

export let page = 1;
export let maxPage = 42;

export const incrementPage = () => {
  page += 1;
};

export const decrementPage = () => {
  page -= 1;
};

export const determinePaginationButtonsState = (currentPage, maxPage) => {
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
  pagination.textContent = `${currentPage} / ${maxPage}`;
};
