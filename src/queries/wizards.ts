import {getCards} from '../utils';

const cards = getCards();

const wizards = cards
  .filter(card => card.subtypes.includes('Wizard'))
  .filter(
    card =>
      !card.colorIdentity.includes('G') &&
      !card.colorIdentity.includes('B') &&
      !card.colorIdentity.includes('R'),
  );

const otherTypes: {[key: string]: number} = {};

wizards.forEach(wizard => {
  wizard.subtypes.forEach(subtype => {
    if (otherTypes[subtype] === undefined) {
      otherTypes[subtype] = 1;
    } else {
      otherTypes[subtype]++;
    }
  });
});

console.log(otherTypes);
