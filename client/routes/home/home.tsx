import { Card } from '@components/card';
import { SocialCards } from '@features/social_links';

export const HomePage = () => {
  return (
    <main>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1 className='separator'>
          <span>What Is Fleiya?</span>
        </h1>

        <div>
          <p>
            Fleiya is a public resource for the community, providing a plethora
            of verified data and information about various topics around the
            Pok&eacute;One game, whether it be information on where to find each
            Pok&eacute;mon, guides on how to find and catch legendary
            Pok&eacute;mon, as well as tools to help you determine the necessary
            IVs needed to have a specifically typed Hidden Power, among other
            things.
          </p>

          <br />

          <p>
            <a
              href='https://mega.nz/file/8FNCRBBB#eFp1bAzTzpdqU_uNdFpDHVj_eZflLdDJ7aDDresQeZ8'
              style={{ fontSize: '2em' }}
            >
              Download Pok&eacute;One For Free
            </a>
          </p>
        </div>

        <br />

        <h1 className='separator'>
          <span>Recent News</span>
        </h1>

        <div className='flex-row'>
          <Card>
            <Card.Section>
              <img
                src='/thumbnails/christmas-event-thumbnail.png'
                style={{
                  borderRadius: '6px 6px 0 0',
                  height: 260,
                  width: 320,
                }}
              />
            </Card.Section>

            <Card.Section>
              <h2 style={{ margin: '0.5em' }}>Christmas Event</h2>
            </Card.Section>
          </Card>

          <div style={{ width: '60%' }}>
            The Christmas event has been reopened for a few weeks, starting on
            July 2nd, 2022, and will end on July 21st, 2022.
            <br />
            <br />
            Make your way over there to partake in a fun (and somewhat long)
            Christmas-themed questline!
            <br />
            <br />
            There are many rewards to be had, and many puns to enjoy.
          </div>
        </div>
      </div>
    </main>
  );
};
