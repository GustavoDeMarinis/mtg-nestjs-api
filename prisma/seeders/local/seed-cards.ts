import { Color, Prisma, Rarity } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';
import { manaSymbols, setIds } from './resource-ids';

const buildLocalCards = (): Prisma.CardUncheckedCreateInput[] => {
  const cards: Prisma.CardUncheckedCreateInput[] = [
    {
      name: 'Black Lotus',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Time Walk',
      isFoil: false,
      manaCost: [manaSymbols.blueMana, manaSymbols.oneGenericMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Timetwister',
      isFoil: false,
      manaCost: [manaSymbols.blueMana, manaSymbols.twoGenericMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Ancestral Recall',
      isFoil: false,
      manaCost: [manaSymbols.blueMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Mox Emerald',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Mox Jet',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Mox Pearl',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Mox Ruby',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Mox Sapphire',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
    {
      name: 'Tiny Bones',
      isFoil: false,
      manaCost: [manaSymbols.blackMana, manaSymbols.oneGenericMana],
      colorIdentity: [Color.Black],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
    },
  ];
  return cards;
};

export const seedLocalCards = async (): Promise<{
  cards: Prisma.CardCreateManyInput[];
}> => {
  const cards = buildLocalCards();
  await prisma.card.createMany({
    data: cards,
  });
  return { cards };
};
