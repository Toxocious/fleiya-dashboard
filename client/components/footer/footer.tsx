import './footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='copyright'>
          Fleiya &copy; 2022{' '}
          <a
            href='https://github.com/toxocious'
            target='_blank'
            rel='noopener noreferrer'
          >
            Toxocious
          </a>
          <br />
          Pok&eacute;mon &copy;{' '}
          <a
            href='https://nintendo.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Nintendo
          </a>{' '}
          /{' '}
          <a
            href='https://www.creatures.co.jp/en'
            target='_blank'
            rel='noopener noreferrer'
          >
            Creatures Inc.
          </a>{' '}
          /{' '}
          <a
            href='https://www.gamefreak.co.jp/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Game Freak Inc.
          </a>
        </div>

        <div className='social-links'>
          <a
            href='https://discord.gg/utBGhYBZYQ'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord
          </a>

          <a
            href='https://github.com/toxocious'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};
