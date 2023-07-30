import { Prisma } from '@prisma/client';
import { cardTypeIds } from './resource-ids';

const buildCardTypes = (): Prisma.CardTypeCreateManyInput[] => {
  const cardTypes: Prisma.CardTypeCreateManyInput[] = [
    { id: cardTypeIds.artifact, name: 'Artifact' },
    { id: cardTypeIds.battle, name: 'Battle' },
    { id: cardTypeIds.conspiracy, name: 'Conspiracy' },
    { id: cardTypeIds.creature, name: 'Creature' },
    { id: cardTypeIds.emblem, name: 'Emblem' },
    { id: cardTypeIds.enchantment, name: 'Enchantment' },
    { id: cardTypeIds.hero, name: 'Hero' },
    { id: cardTypeIds.instant, name: 'Instant' },
    { id: cardTypeIds.land, name: 'Land' },
    { id: cardTypeIds.phenomenon, name: 'Phenomenon' },
    { id: cardTypeIds.plane, name: 'Plane' },
    { id: cardTypeIds.planeswalker, name: 'Planeswalker' },
    { id: cardTypeIds.scheme, name: 'Scheme' },
    { id: cardTypeIds.sorcery, name: 'Sorcery' },
    { id: cardTypeIds.tribal, name: 'Tribal' },
    { id: cardTypeIds.vanguard, name: 'Vanguard' },
  ];
  return cardTypes;
};

export const seedCardTypes = async (): Promise<{
  cardTypes: Prisma.CardTypeCreateManyInput[];
}> => {
  const cardTypes: Prisma.CardTypeCreateManyInput[] = buildCardTypes();
  await prisma.cardType.createMany({
    data: cardTypes,
  });
  return { cardTypes };
};
