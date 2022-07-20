import { BrandDiscord, Download } from 'tabler-icons-react';

import { Card } from '@components/card';

export const SocialCards = () => {
  return (
    <>
      <Card variant='group gradient'>
        <Card.Section
          style={{
            margin: '-0.5em 0em 0 0',
            padding: '0 1em',
          }}
        >
          <Download size={48} />
        </Card.Section>
        <Card.Section
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '2.5em',
            borderLeft: '1px solid #6C6F93',
          }}
        >
          <div style={{ fontSize: 36, textAlign: 'center' }}>
            Download Pok&eacute;One
          </div>
        </Card.Section>
      </Card>

      <Card variant='group gradient'>
        <Card.Section
          style={{
            margin: '-0.5em 0em 0 0',
            padding: '0 1em',
          }}
        >
          <BrandDiscord size={48} />
        </Card.Section>
        <Card.Section
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '2.5em',
            borderLeft: '1px solid #6C6F93',
          }}
        >
          <div style={{ fontSize: 36, textAlign: 'center' }}>
            Fleiya's Discord
          </div>
        </Card.Section>
      </Card>
    </>
  );
};
