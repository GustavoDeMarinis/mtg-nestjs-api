import { Prisma } from '@prisma/client';
import { setTypeIds } from './resource-ids';

const buildSetTypes = (): Prisma.SetTypeCreateManyInput[] => {
  const setTypes: Prisma.SetTypeCreateManyInput[] = [
    { name: 'Expansion', id: setTypeIds.expansion },
    { name: 'Core', id: setTypeIds.core },
    { name: 'Master', id: setTypeIds.master },
    { name: 'DraftInnovation', id: setTypeIds.draftInnovation },
    { name: 'DuelDeck', id: setTypeIds.duelDeck },
    { name: 'Alchemy', id: setTypeIds.alchemy },
    { name: 'Archenemy', id: setTypeIds.archenemy },
    { name: 'Arsenal', id: setTypeIds.arsenal },
    { name: 'Box', id: setTypeIds.box },
    { name: 'Commander', id: setTypeIds.commander },
    { name: 'FromTheVault', id: setTypeIds.fromTheVault },
    { name: 'Funny', id: setTypeIds.funny },
    { name: 'MasterPiece', id: setTypeIds.masterPiece },
    { name: 'Memorabilia', id: setTypeIds.memorabilia },
    { name: 'MiniGame', id: setTypeIds.miniGame },
    { name: 'PlaneChase', id: setTypeIds.planeChase },
    { name: 'PremiumDeck', id: setTypeIds.premiumDeck },
    { name: 'Promo', id: setTypeIds.promo },
    { name: 'SpellBook', id: setTypeIds.spellBook },
    { name: 'Starter', id: setTypeIds.starter },
    { name: 'Token', id: setTypeIds.token },
    { name: 'TreasureChest', id: setTypeIds.treasureChest },
    { name: 'Vanguard', id: setTypeIds.vanguard },
  ];
  return setTypes;
};

export const seedSetTypes = async (): Promise<{
  setTypes: Prisma.SetTypeCreateManyInput[];
}> => {
  const setTypes = buildSetTypes();
  prisma.setType.createMany({
    data: setTypes,
  });
  return { setTypes };
};
