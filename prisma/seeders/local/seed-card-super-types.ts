import { Prisma } from '@prisma/client';
import { superTypeIds } from './resource-ids';
import prisma from '../../../src/integrations/prisma-client';

const buildSuperTypes = (): Prisma.CardSuperTypeCreateManyInput[] => {
  const superTypes = [
    {
      id: superTypeIds.basic,
      name: 'Basic',
    },
    {
      id: superTypeIds.elite,
      name: 'Elite',
    },
    {
      id: superTypeIds.legendary,
      name: 'Legendary',
    },
    {
      id: superTypeIds.ongoing,
      name: 'Ongoing',
    },
    {
      id: superTypeIds.snow,
      name: 'Snow',
    },
    {
      id: superTypeIds.token,
      name: 'Token',
    },
    {
      id: superTypeIds.world,
      name: 'World',
    },
  ];

  return superTypes;
};

export const seedCardSuperTypes = async (): Promise<{
  cardSuperTypes: Prisma.CardSuperTypeCreateManyInput[];
}> => {
  const cardSuperTypes: Prisma.CardSuperTypeCreateManyInput[] =
    buildSuperTypes();
  await prisma.cardSuperType.createMany({
    data: cardSuperTypes,
  });

  return { cardSuperTypes };
};
