import {
  Card,
  Group,
  Image,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';

import { FeatureList } from '~/constants/feature_list';

import PokeOneIcon from '~/assets/PokeOne.ico';
import { Badge } from 'tabler-icons-react';

export const HomePage = () => {
  const theme = useMantineTheme();

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

        <hr />
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

      <section>
        <h1 style={{ margin: '10px 1em', textAlign: 'left' }}>Free Features</h1>

        <hr />

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
            <div className='card-container'>
              <Card radius='md' shadow='md'>
                <Card.Section>
                  <Image src={feature.image} height={160} alt={feature.name} />
                </Card.Section>

                <Group position='apart'>
                  <Text weight='bold'>{feature.name}</Text>
                  {feature.premium ? (
                    <Tooltip
                      label='Premium Feature'
                      openDelay={50}
                      color='dark'
                    >
                      <Badge color='teal' />
                    </Tooltip>
                  ) : null}
                  <Text
                    size='sm'
                    color='gray'
                    style={{ lineHeight: 1.5, textAlign: 'left' }}
                  >
                    {feature.description}
                  </Text>
                </Group>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <br />

      <section>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge color='teal' />
          <h1 style={{ margin: '10px 1em', textAlign: 'left' }}>
            Premium Features
          </h1>
        </div>

        <hr />

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
            <div className='card-container'>
              <Card radius='md' shadow='md'>
                <Card.Section>
                  <Image src={feature.image} height={160} alt={feature.name} />
                </Card.Section>

                <Group position='apart'>
                  <Text weight='bold'>{feature.name}</Text>
                  <Text
                    size='sm'
                    color='gray'
                    style={{ lineHeight: 1.5, textAlign: 'left' }}
                  >
                    {feature.description}
                  </Text>
                </Group>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
