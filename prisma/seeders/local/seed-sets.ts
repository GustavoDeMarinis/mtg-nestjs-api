import { Prisma } from '@prisma/client';
import prisma from '../../../src/integrations/prisma-client';
import { setIds, setTypeIds } from './resource-ids';

const buildSets = (): Prisma.SetCreateManyInput[] => {
  const sets: Prisma.SetCreateManyInput[] = [
    {
      id: setIds.alpha,
      name: 'Limited Edition Alpha',
      releaseDate: new Date('1993-08-05'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.beta,
      name: 'Limited Edition Beta',
      releaseDate: new Date('1993-10-04'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.unlimited,
      name: 'Unlimited Edition',
      releaseDate: new Date('1993-12-01'),
      setTypeId: setTypeIds.core,
    },

    {
      id: setIds.revised,
      name: 'Revised Edition',
      releaseDate: new Date('1994-04-01'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.fourthEdition,
      name: 'Fourth Edition',
      releaseDate: new Date('1995-04-1'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.fifthEdition,
      name: 'Fifth Edition',
      releaseDate: new Date('1997-03-24'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.sixthEdition,
      name: 'Classic Sixth Edition',
      releaseDate: new Date('1999-04-28'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.seventhEdition,
      name: 'Seventh Edition',
      releaseDate: new Date('2001-04-11'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.eighthEdition,
      name: 'Eighth Edition',
      releaseDate: new Date('2003-07-28'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.ninthEdition,
      name: 'Ninth Edition',
      releaseDate: new Date('2005-07-29'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.tenthEdition,
      name: 'Tenth Edition',
      releaseDate: new Date('2007-07-13'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m10,
      name: 'Magic 2010',
      releaseDate: new Date('2009-07-17'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m11,
      name: 'Magic 2011',
      releaseDate: new Date('2010-07-16'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m12,
      name: 'Magic 2012',
      releaseDate: new Date('2011-07-15'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m13,
      name: 'Magic 2013',
      releaseDate: new Date('2012-07-13'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m14,
      name: 'Magic 2014',
      releaseDate: new Date('2013-07-19'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.m15,
      name: 'Magic 2015',
      releaseDate: new Date('2014-07-18'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.origins,
      name: 'Magic Origins',
      releaseDate: new Date('2015-07-17'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.core19,
      name: 'Core Set 2019',
      releaseDate: new Date('2018-07-13'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.core20,
      name: 'Core Set 2020',
      releaseDate: new Date('2019-07-12'),
      setTypeId: setTypeIds.core,
    },
    {
      id: setIds.core21,
      name: 'Core Set 2021',
      releaseDate: new Date('2020-07-03'),
      setTypeId: setTypeIds.core,
    },
  ];

  return sets;
};

export const seedSets = async (): Promise<{
  sets: Prisma.SetCreateManyInput[];
}> => {
  const sets: Prisma.SetCreateManyInput[] = buildSets();

  await sets.map(async (set) => {
    return await prisma.set.create({
      data: set,
    });
  });

  return { sets };
};
