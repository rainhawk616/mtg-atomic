import {getCards} from '../utils';

const cards = getCards();

const humans = cards
  .filter(card => card.subtypes.includes('Human'))
  .filter(
    card =>
      !card.colorIdentity.includes('G') &&
      !card.colorIdentity.includes('B') &&
      !card.colorIdentity.includes('R'),
  );

const otherTypes: {[key: string]: number} = {};

humans.forEach(human => {
  human.subtypes.forEach(subtype => {
    if (otherTypes[subtype] === undefined) {
      otherTypes[subtype] = 1;
    } else {
      otherTypes[subtype]++;
    }
  });
});

console.log(otherTypes);
