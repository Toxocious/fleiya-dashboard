import { Text, createStyles } from '@mantine/core';

import PokeOneIcon from '@assets/PokeOne.ico';

const useStyles = createStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  sectionHeading: {
    margin: 0,
    letterSpacing: 4,
  },
}));

export const HomePage = () => {
  const { classes } = useStyles();

  return (
    <div className='page'>
      <div className={classes.flexCenter}>
        <div>
          <img
            src={PokeOneIcon}
            style={{
              height: 64,
              width: 64,
            }}
          />
          <h1 className={classes.sectionHeading}>Fleiya</h1>
        </div>

        <br />
        <hr />
        <br />

        <section>
          <Text size='md'>
            Fleiya is a mod loader that both enhances and expands the in-game
            functionality provided to the player in the Pok&eacute;One MMORPG.
          </Text>

          <br />

          <Text size='md'>
            This website serves to be the dashboard provided to users of Fleiya,
            displaying all documented information that has been collected by
            those who use Fleiya, including user-specific information that has
            been collected while playing.
          </Text>
        </section>
      </div>
    </div>
  );
};
