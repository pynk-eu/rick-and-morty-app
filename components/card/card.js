export function createCharacterCard(character) {
  return `
    <li class="card" data-js="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${character.image}"
              alt="${character.name}"
            />
          </div>
          <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Gender</dt>
              <dd class="card__info-description">${character.gender}</dd>
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${character.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${
                character.type || "unknown"
              }</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${
                character.episode.length
              }</dd>
            </dl>
          </div>
        </li>
        `;
}
