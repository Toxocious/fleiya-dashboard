import { Tooltip, Group, Button, Box } from '@mantine/core';

import { BrandGithub } from 'tabler-icons-react';

import PokeOneIcon from '~/assets/PokeOne.ico';

export function SidebarHeader() {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position='apart'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
          }}
        >
          <img
            src={PokeOneIcon}
            style={{
              height: 36,
              width: 36,
            }}
          />
          <h2 style={{ margin: 0 }}>Fleiya</h2>
        </div>

        <Tooltip label='View Source Code' openDelay={200} color='dark'>
          <Button
            compact
            component='a'
            variant='subtle'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Toxocious/pokeone-dashboard'
          >
            <BrandGithub size={16} />
          </Button>
        </Tooltip>
      </Group>
    </Box>
  );
}
