import { Prisma } from '@prisma/client';
import { setTypeIds } from './resource-ids';

const buildSets = (): Prisma.SetCreateManyInput[] => {
  const sets: Prisma.SetCreateManyInput[] = [
    {
      name: 'Limited Edition Alpha',
      releaseDate: '1993-08-05',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Limited Edition Beta',
      releaseDate: '1993-10-04',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Unlimited Edition',
      releaseDate: '1993-12-01',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Revised Edition',
      releaseDate: '1994-04-01',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Fourth Edition',
      releaseDate: '1995-04-1',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Fifth Edition',
      releaseDate: '1997-03-24',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Classic Sixth Edition',
      releaseDate: '1999-04-28',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Seventh Edition',
      releaseDate: '2001-04-11',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Eighth Edition',
      releaseDate: '2003-07-28',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Ninth Edition',
      releaseDate: '2005-07-29',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Tenth Edition',
      releaseDate: '2007-07-13',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2010',
      releaseDate: '2009-07-17',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2011',
      releaseDate: '2010-07-16',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2012',
      releaseDate: '2011-07-15',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2013',
      releaseDate: '2012-07-13',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2014',
      releaseDate: '2013-07-19',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic 2015',
      releaseDate: '2014-07-18',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Magic Origins',
      releaseDate: '2015-07-17',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Core Set 2019',
      releaseDate: '2018-07-13',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Core Set 2020',
      releaseDate: '2019-07-12',
      setTypeId: setTypeIds.core,
    },
    {
      name: 'Core Set 2021',
      releaseDate: '2020-07-03',
      setTypeId: setTypeIds.core,
    },
  ];

  return sets;
};

export const seedSets = async (): Promise<{
  sets: Prisma.SetCreateManyInput[];
}> => {
  const sets = buildSets();
  prisma.set.createMany({
    data: sets,
  });
  return { sets };
};
