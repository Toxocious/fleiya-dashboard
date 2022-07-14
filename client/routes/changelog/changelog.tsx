import { Paper, List } from '@mantine/core';

import { Changelog } from 'client/constants/changelog';

export const ChangelogPage = () => {
  return (
    <div
      className='page'
      style={{
        gap: 0,
      }}
    >
      <section>
        <h2>Changelog</h2>
        <hr />
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
        }}
      >
        {Changelog.sort((a, b) => b.id - a.id).map((log) => (
          <>
            <h2>{log.date}</h2>
            <Paper shadow='md' radius='md' p='md' withBorder>
              <List>
                {log.changes.map((change) => (
                  <List.Item>{change}</List.Item>
                ))}
              </List>
            </Paper>
          </>
        ))}
      </section>
    </div>
  );
};
