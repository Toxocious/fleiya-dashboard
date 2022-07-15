import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

import {
  Icon as TablerIcon,
  ChevronLeft,
  ChevronRight,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  control: {
    'fontWeight': 500,
    'display': 'block',
    'width': '100%',
    'padding': `${theme.spacing.xs}px ${theme.spacing.md}px`,
    'color': theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    'fontSize': theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    'fontWeight': 500,
    'display': 'block',
    'textDecoration': 'none',
    'padding': `${theme.spacing.xs}px ${theme.spacing.md}px`,
    'paddingLeft': 31,
    'marginLeft': 30,
    'fontSize': theme.fontSizes.sm,
    'color':
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    'borderLeft': `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  linkTo?: string;
  links?: { label: string; link: string }[];
}

export function SidebarLinksGroup({
  icon: Icon,
  linkTo,
  label,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links) && links.length > 0;
  const [opened, setOpened] = useState(false);
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft;

  const items = (hasLinks ? links : []).map((link) => (
    <UnstyledButton
      component={Link}
      to={link.link}
      className={classes.link}
      key={link.label}
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
