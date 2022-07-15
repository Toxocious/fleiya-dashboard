import { Text } from '@mantine/core';

import { FeatureCard } from '@components/feature_card';
import { FeatureList } from '@constants/feature_list';

import PokeOneIcon from '@assets/PokeOne.ico';

export const HomePage = () => {
  return (
    <div className='page'>
      <div
        className='section-header'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5em',
        }}
      >
        <img
          src={PokeOneIcon}
          style={{
            height: 64,
            width: 64,
          }}
        />
        <h1 style={{ margin: 0, letterSpacing: 4 }}>Fleiya</h1>

        <br />
        <hr />
        <br />
      </div>

      <section>
        <Text size='md'>
          Fleiya is a mod loader that both enhances and expands the in-game
          functionality provided to the player in the Pok&eacute;One MMORPG.
        </Text>

        <br />

        <Text size='md'>
          This website serves to be the dashboard provided to users of Fleiya,
          displaying all documented information that has been collected by those
          who use Fleiya, including user-specific information that has been
          collected while playing.
        </Text>
      </section>

      <br />
      <br />

      <section>
        <h1 style={{ margin: 0, letterSpacing: 4 }}>Free Features</h1>

        <br />
        <hr />
        <br />

        <Text size='md'>
          Fleiya provides a number of freely available features that are
          available to enhance your playing experience.
        </Text>
        <br />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1em',
          }}
        >
          {FeatureList.filter((feature) => !feature.premium).map((feature) => (
            <FeatureCard {...feature} />
          ))}
        </div>
      </section>

      <br />
      <br />

      <section>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ margin: 0, letterSpacing: 4 }}>Premium Features</h1>
        </div>

        <br />
        <hr />
        <br />

        <Text size='md'>
          Fleiya provides a number of premium features that are available to
          enhance your playing experience even beyond that of what Fleiya
          provides for free.
        </Text>
        <br />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1em',
          }}
        >
          {FeatureList.filter((feature) => feature.premium).map((feature) => (
            <FeatureCard {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};
