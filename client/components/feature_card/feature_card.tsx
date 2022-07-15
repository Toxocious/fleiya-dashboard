import { Image, Card, Group, Text, createStyles } from '@mantine/core';

interface iFeatureCard {
  id: number;
  image: string;
  name: string;
  premium: boolean;
  description: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2px) saturate(100%)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
  },

  cardImage: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.125)',
  },

  cardContent: {
    paddingTop: '1em',
  },
}));

export const FeatureCard = (props: iFeatureCard) => {
  const { classes } = useStyles();
  const { id, image, name, premium, description } = props;

  return (
    <div key={id} className='card-container'>
      <Card radius='md' shadow='md' className={classes.card}>
        <Card.Section className={classes.cardImage}>
          <Image src={image} height={160} alt={name} />
        </Card.Section>

        <Group position='center' className={classes.cardContent}>
          <Text weight='bold'>{name}</Text>

          <Text
            size='sm'
            color='gray'
            style={{ lineHeight: 1.5, textAlign: 'left' }}
          >
            {description}
          </Text>
        </Group>
      </Card>
    </div>
  );
};
