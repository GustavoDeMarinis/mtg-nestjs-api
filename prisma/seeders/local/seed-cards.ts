import { Color, Prisma, Rarity } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';
import { cardTypeIds, manaSymbols, setIds } from './resource-ids';

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
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Time Walk',
      isFoil: false,
      manaCost: [manaSymbols.blueMana, manaSymbols.oneGenericMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.sorcery }],
      },
    },
    {
      name: 'Timetwister',
      isFoil: false,
      manaCost: [manaSymbols.blueMana, manaSymbols.twoGenericMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.sorcery }],
      },
    },
    {
      name: 'Ancestral Recall',
      isFoil: false,
      manaCost: [manaSymbols.blueMana],
      colorIdentity: [Color.Blue],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.instant }],
      },
    },
    {
      name: 'Mox Emerald',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Mox Jet',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Mox Pearl',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Mox Ruby',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Mox Sapphire',
      isFoil: false,
      manaCost: [manaSymbols.zeroMana],
      colorIdentity: [],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.artifact }],
      },
    },
    {
      name: 'Tiny Bones',
      isFoil: false,
      manaCost: [manaSymbols.blackMana, manaSymbols.oneGenericMana],
      colorIdentity: [Color.Black],
      cardImageUrl: '',
      rarity: Rarity.Rare,
      setId: setIds.alpha,
      cardType: {
        connect: [{ id: cardTypeIds.creature }],
      },
    },
  ];
  return cards;
};

export const seedLocalCards = async (): Promise<{
  cards: Prisma.CardUncheckedCreateInput[];
}> => {
  const cards = buildLocalCards();

  cards.map(async (card) => {
    return await prisma.card.create({
      data: card,
    });
  });
  return { cards };
};
