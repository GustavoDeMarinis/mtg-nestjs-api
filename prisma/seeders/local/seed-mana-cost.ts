import { Prisma } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';
import { manaSymbols } from './resource-ids';

const buildManaCost = (): Prisma.ManaCostCreateManyInput[] => {
  const manaCost: Prisma.ManaCostCreateManyInput[] = [
    { label: 'one white mana', symbol: manaSymbols.whiteMana },
    { label: 'one blue mana', symbol: manaSymbols.blueMana },
    { label: 'one black mana', symbol: manaSymbols.blackMana },
    { label: 'one red mana', symbol: manaSymbols.redMana },
    { label: 'one green mana', symbol: manaSymbols.greenMana },
    { label: 'one colorless mana', symbol: manaSymbols.colorlessMana },
    { label: 'X generic mana', symbol: manaSymbols.xGenericMana },
    { label: 'zero mana', symbol: manaSymbols.zeroMana },
    { label: 'one generic mana', symbol: manaSymbols.oneGenericMana },
    { label: 'two generic mana', symbol: manaSymbols.twoGenericMana },
    { label: 'three generic mana', symbol: manaSymbols.threeGenericMana },
    { label: 'four generic mana', symbol: manaSymbols.fourGenericMana },
    { label: 'five generic mana', symbol: manaSymbols.fiveGenericMana },
    { label: 'six generic mana', symbol: manaSymbols.sixGenericMana },
    { label: 'seven generic mana', symbol: manaSymbols.sevenGenericMana },
    { label: 'eight generic mana', symbol: manaSymbols.eightGenericMana },
    { label: 'nine generic mana', symbol: manaSymbols.nineGenericMana },
    { label: 'ten generic mana', symbol: manaSymbols.tenGenericMana },
    { label: 'eleven generic mana', symbol: manaSymbols.elevenGenericMana },
    { label: 'twelve generic mana', symbol: manaSymbols.twelveGenericMana },
    {
      label: 'thirdteen generic mana',
      symbol: manaSymbols.thirdteenGenericMana,
    },
    { label: 'fourteen generic mana', symbol: manaSymbols.fourteenGenericMana },
    { label: 'fifteen generic mana', symbol: manaSymbols.fifteenGenericMana },
    { label: 'sixteen generic mana', symbol: manaSymbols.sixteenGenericMana },
    { label: 'one white or blue mana', symbol: manaSymbols.whiteOrBlueMana },
    { label: 'one white or black mana', symbol: manaSymbols.whiteOrBlackMana },
    { label: 'one black or red mana', symbol: manaSymbols.blackOrRedMana },
    { label: 'one black or green mana', symbol: manaSymbols.blackOrGreenMana },
    { label: 'one blue or black mana', symbol: manaSymbols.blueOrBlackMana },
    { label: 'one blue or red mana', symbol: manaSymbols.blueOrRedMana },
    { label: 'one red or green mana', symbol: manaSymbols.redOrGreenMana },
    { label: 'one red or white mana', symbol: manaSymbols.redOrWhiteMana },
    { label: 'green or white mana', symbol: manaSymbols.greenOrWhiteMana },
    { label: 'green or blue mana', symbol: manaSymbols.greenOrBlueMana },
    {
      label: 'one green mana, one blue mana, or 2 life',
      symbol: manaSymbols.greenManaOrBlueManaOrTwoLife,
    },
    {
      label: 'one green mana, one white mana, or 2 life',
      symbol: manaSymbols.greenManaWhiteManaOrTwoLife,
    },
    {
      label: 'two generic mana or one white mana',
      symbol: manaSymbols.twoGenericManaOrOneWhiteMana,
    },
    {
      label: 'two generic mana or one blue mana',
      symbol: manaSymbols.twoGenericManaOrOneBlueMana,
    },
    {
      label: 'two generic mana or one black mana',
      symbol: manaSymbols.twoGenericManaOrOneBlackMana,
    },
    {
      label: 'two generic mana or one red mana',
      symbol: manaSymbols.twoGenericManaOrOneRedMana,
    },
    {
      label: 'two generic mana or one green mana',
      symbol: manaSymbols.twoGenericManaOrOneGreenMana,
    },
    {
      label: 'one white mana or two life',
      symbol: manaSymbols.oneWhiteManaOrTwoLife,
    },
    {
      label: 'one blue mana or two life',
      symbol: manaSymbols.oneBlueManaOrTwoLife,
    },
    {
      label: 'one black mana or two life',
      symbol: manaSymbols.oneBlackManaOrTwoLife,
    },
    {
      label: 'one red mana or two life',
      symbol: manaSymbols.oneRedManaOrTwoLife,
    },
    {
      label: 'one green mana or two life',
      symbol: manaSymbols.oneGreenManaOrTwoLife,
    },
    { label: 'one snow mana', symbol: manaSymbols.snowMana },
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
