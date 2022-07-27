import { useEffect, useState } from 'react';

import { Card } from '@components/card';

import { Changelog } from '@constants/changelog';

export const ChangelogPage = () => {
  const [lastUpdatedOn, setLastUpdatedOn] = useState('');

  useEffect(() => {
    const LAST_CHANGELOG = Changelog.sort((a, b) => b.id - a.id)[0] ?? 'never';

    const LAST_UPDATE = LAST_CHANGELOG?.date;

    setLastUpdatedOn(LAST_UPDATE);
  }, undefined);

  return (
    <main>
      <div className='page-header'>
        <h1>Changelog</h1>
        <aside>Last Updated: {lastUpdatedOn}</aside>
      </div>

      <div>
        {Changelog.sort((a, b) => b.id - a.id).map((log) => (
          <>
            <h2 className='separator'>{log.date}</h2>
            <Card width='100%'>
              <ul>
                {log.changes.map((change) => (
                  <li>{change}</li>
                ))}
              </ul>
            </Card>
          </>
        ))}
      </div>
    </main>
  );
};
