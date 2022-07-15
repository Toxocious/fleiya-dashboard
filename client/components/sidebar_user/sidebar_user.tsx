import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
} from '@mantine/core';

export function User() {
  const theme = useMantineTheme();

  return (
    <>
      <hr />

      <Box
        sx={{
          paddingTop: theme.spacing.sm,
        }}
      >
        <UnstyledButton
          sx={{
            'display': 'block',
            'width': '100%',
            'padding': theme.spacing.xs,
            'borderRadius': theme.radius.sm,
            'color':
              theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.black,

            '&:hover': {
              backgroundColor: 'rgba(97, 32, 201, 0.15)',
            },
          }}
        >
          <Group>
            <Avatar radius='xl' />
            <Box sx={{ flex: 1 }}>
              <Text size='sm' weight={500}>
                Guest
              </Text>
              <Text color='dimmed' size='xs'>
                Free Membership
              </Text>
            </Box>
          </Group>
        </UnstyledButton>
      </Box>
    </>
  );
}
