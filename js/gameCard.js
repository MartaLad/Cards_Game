export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const flippedCardI = document.createElement('i');

    flippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
}