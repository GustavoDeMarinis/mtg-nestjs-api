import { Color, Prisma } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';

const buildLocalCards = (): Prisma.CardUncheckedCreateInput[] => {
  const cards: Prisma.CardUncheckedCreateInput[] = [
    {
      name: 'Black Lotus',
      isFoil: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Time Walk',
      hasFoilVersion: false,
      manaCost: ['{U}', '{1}'],
      colorIdentity: [Color.Blue],
    },
    {
      name: 'Timetwister',
      hasFoilVersion: false,
      manaCost: ['{U}', '{2}'],
      colorIdentity: [Color.Blue],
    },
    {
      name: 'Ancestral Recall',
      hasFoilVersion: false,
      manaCost: ['{U}'],
      colorIdentity: [Color.Blue],
    },
    {
      name: 'Mox Emerald',
      hasFoilVersion: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Mox Jet',
      hasFoilVersion: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Mox Pearl',
      hasFoilVersion: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Mox Ruby',
      hasFoilVersion: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Mox Sapphire',
      hasFoilVersion: false,
      manaCost: ['{0}'],
      colorIdentity: [],
    },
    {
      name: 'Tiny Bones',
      hasFoilVersion: false,
      manaCost: ['{B}', '{1}'],
      colorIdentity: [Color.Black],
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
