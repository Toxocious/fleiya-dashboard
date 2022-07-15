import { Navbar, ScrollArea, createStyles } from '@mantine/core';

import { SidebarNavigation } from '@constants/sidebar_navigation';

import { SidebarLinksGroup } from '@components/sidebar_links_group';

const useStyles = createStyles((theme) => ({
  links: {
    marginTop: '-1em',
    width: '100%',
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export function MainLinks() {
  const { classes } = useStyles();

  const links = SidebarNavigation.map((item) => (
    <SidebarLinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar.Section grow className={classes.links} component={ScrollArea}>
      <div className={classes.linksInner}>{links}</div>
    </Navbar.Section>
  );
}
