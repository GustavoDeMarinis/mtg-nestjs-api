import { seedCardTypes } from './seed-card-types';
import { seedLocalCards } from './seed-cards';
import { seedManaCost } from './seed-mana-cost';
import { seedSetTypes } from './seed-set-types';
import { seedSets } from './seed-sets';

export const seedLocal = async () => {
  await seedManaCost();
  await seedSetTypes();
  await seedSets();
  await seedCardTypes();
  await seedLocalCards();
};
