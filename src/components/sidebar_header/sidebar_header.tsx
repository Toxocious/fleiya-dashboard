import { Tooltip, Group, Button, Box } from '@mantine/core';

import { BrandGithub } from 'tabler-icons-react';

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
        <h2 style={{ margin: 0 }}>Fleiya</h2>

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
