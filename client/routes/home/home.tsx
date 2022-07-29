import { FeaturedNews } from '@features/featured_news';

export const HomePage = () => {
  return (
    <>
      <FeaturedNews />

      <main>
        <h2 className='separator'>
          <span>Fleiya</span>
        </h2>

        <p>
          Fleiya is a public resource for the community, providing a plethora of
          verified data and information about various topics around the
          Pok&eacute;One game, whether it be information on where to find each
          Pok&eacute;mon, guides on how to find and catch legendary
          Pok&eacute;mon, as well as tools to help you determine the necessary
          IVs needed to have a specifically typed Hidden Power, among other
          things.
        </p>

        <p>
          Have a suggestion for the website that you'd like to see implemented?
          <br />
          Check out our{' '}
          <a
            href='https://discord.gg/utBGhYBZYQ'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord
          </a>{' '}
          server, or go make an issue on our{' '}
          <a
            href='https://github.com/toxocious/fleiya-dashboard'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>{' '}
          repository, and we'll get back to you as soon as possible!
        </p>

        <p>
          Fleiya is a passion project, and is in no way officially affiliated
          with Pok&eacute;One or its development team.
        </p>
      </main>
    </>
  );
};
