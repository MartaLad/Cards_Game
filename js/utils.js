export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const dublicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        'bomb',
        'cloud',
        'hippo',
        'bell',
        'ghost',
        'car',
        'gift',
        'rocket',
        'umbrella',
        'fire',
        'camera',
        'plane'
    ];

    switch (initialCount) {
        case 8:
            return cardsIcons.slice(0, 4);
        case 12:
            return cardsIcons.slice(0, 6);
        case 16:
            return cardsIcons.slice(0, 8);
        case 24:
            return cardsIcons;

        default:
            break
    }

}