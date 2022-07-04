import { Link } from 'react-router-dom';

import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

import { SidebarNavigation } from '../../constants/sidebar_navigation';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

function MainLink({ icon, color, label, route }: MainLinkProps) {
  return (
    <UnstyledButton
      component={Link}
      to={route}
      sx={(theme) => ({
        'display': 'block',
        'width': '93%',
        'padding': theme.spacing.xs,
        'borderRadius': theme.radius.sm,
        'color':
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant='light'>
          {icon}
        </ThemeIcon>

        <Text size='sm'>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export function MainLinks() {
  const links = SidebarNavigation.map((link) => (
    <MainLink {...link} key={link.label} />
  ));
  return <div>{links}</div>;
}
