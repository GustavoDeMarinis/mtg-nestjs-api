import { Prisma } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';

const buildManaCost = (): Prisma.ManaCostCreateManyInput[] => {
  const manaCost: Prisma.ManaCostCreateManyInput[] = [
    { label: 'one white mana', symbol: '{W}' },
    { label: 'one blue mana', symbol: '{U}' },
    { label: 'one black mana', symbol: '{B}' },
    { label: 'one red mana', symbol: '{R}' },
    { label: 'one green mana', symbol: '{G}' },
    { label: 'one colorless mana', symbol: '{C}' },
    { label: 'X generic mana', symbol: '{X}' },
    { label: 'zero mana', symbol: '{0}' },
    { label: 'one generic mana', symbol: '{1}' },
    { label: 'two generic mana', symbol: '{2}' },
    { label: 'three generic mana', symbol: '{3}' },
    { label: 'four generic mana', symbol: '{4}' },
    { label: 'five generic mana', symbol: '{5}' },
    { label: 'six generic mana', symbol: '{6}' },
    { label: 'seven generic mana', symbol: '{7}' },
    { label: 'eight generic mana', symbol: '{8}' },
    { label: 'nine generic mana', symbol: '{9}' },
    { label: 'ten generic mana', symbol: '{10}' },
    { label: 'eleven generic mana', symbol: '{11}' },
    { label: 'twelve generic mana', symbol: '{12}' },
    { label: 'thirdteen generic mana', symbol: '{13}' },
    { label: 'fourteen generic mana', symbol: '{14}' },
    { label: 'fifteen generic mana', symbol: '{15}' },
    { label: 'sixteen generic mana', symbol: '{16}' },
    { label: 'one white or blue mana', symbol: '{W/U}' },
    { label: 'one white or black mana', symbol: '{W/B}' },
    { label: 'one black or red mana', symbol: '{B/R}' },
    { label: 'one black or green mana', symbol: '{B/G}' },
    { label: 'one blue or black mana', symbol: '{U/B}' },
    { label: 'one blue or red mana', symbol: '{U/R}' },
    { label: 'one red or green mana', symbol: '{R/G}' },
    { label: 'one red or white mana', symbol: '{R/W}' },
    { label: 'green or white mana', symbol: '{G/W}' },
    { label: 'green or blue mana', symbol: '{G/U}' },
    { label: 'one green mana, one blue mana, or 2 life', symbol: '{G/U/P}' },
    { label: 'one green mana, one white mana, or 2 life', symbol: '{G/W/P}' },
    { label: 'two generic mana or one white mana', symbol: '{2/W}' },
    { label: 'two generic mana or one blue mana', symbol: '{2/U}' },
    { label: 'two generic mana or one black mana', symbol: '{2/B}' },
    { label: 'two generic mana or one red mana', symbol: '{2/R}' },
    { label: 'two generic mana or one green mana', symbol: '{2/G}' },
    { label: 'one white mana or two life', symbol: '{W/P}' },
    { label: 'one blue mana or two life', symbol: '{U/P}' },
    { label: 'one black mana or two life', symbol: '{B/P}' },
    { label: 'one red mana or two life', symbol: '{R/P}' },
    { label: 'one green mana or two', symbol: '{G/P}' },
    { label: 'one snow mana', symbol: '{S}' },
  ];
  return manaCost;
};

export const seedManaCost = async (): Promise<{
  manaCost: Prisma.ManaCostCreateManyInput[];
}> => {
  const manaCost = buildManaCost();
  await prisma.manaCost.createMany({
    data: manaCost,
  });
  return { manaCost };
};
