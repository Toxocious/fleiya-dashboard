import { Navbar } from '@mantine/core';

import { SidebarHeader } from 'client/components/sidebar_header';
import { MainLinks } from 'client/components/sidebar_links';
import { User } from 'client/components/sidebar_user';

export const Sidebar = () => {
  return (
    <Navbar p='xs' width={{ base: 300 }}>
      <Navbar.Section mt='xs'>
        <SidebarHeader />
      </Navbar.Section>
      <Navbar.Section grow mt='md'>
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
};
