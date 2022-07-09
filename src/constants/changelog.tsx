interface iChangelog {
  id: number;
  date: string;
  changes: string[];
}

export const Changelog: iChangelog[] = [
  {
    id: 1,
    date: 'July 8th, 2022',
    changes: [
      'Fixed an issue causing a feature to sometimes not work.',
      'Fixed an issue where membership tiers did not automatically expire on a monthly basis.',
    ],
  },
  {
    id: 0,
    date: 'July 7th, 2022',
    changes: [
      'Implemented feature that does thing.',
      'Fixed a bug that caused a thing.',
      'Updated the membership tiers.',
    ],
  },
];
