import {CardAtomic} from './../build/src/models/models.d';
import {AtomicFile, Meta} from './models';
const fs = require('node:fs');

export function getCards(): CardAtomic[] {
  const data = fs.readFileSync('./AtomicCards.json', 'utf8');
  const atomicFile = JSON.parse(data) as AtomicFile;

  const cards = Object.values(atomicFile.data).flat(1);

  const commanderCards = cards.filter(
    card => card.legalities.commander === 'Legal',
  );

  return commanderCards;
}
