import { Navbar } from '@mantine/core';
import { SidebarHeader } from 'components/sidebar_header';
import { MainLinks } from 'components/sidebar_links';
import { User } from 'components/sidebar_user';

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
