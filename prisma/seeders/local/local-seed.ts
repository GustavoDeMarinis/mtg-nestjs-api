import { seedLocalCards } from './seed-cards';
import { seedManaCost } from './seed-mana-cost';

export const seedLocal = async () => {
  await seedManaCost();
  await seedLocalCards();
};
