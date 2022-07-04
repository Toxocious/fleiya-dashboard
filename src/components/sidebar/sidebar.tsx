import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '@mantine/core';
import { SidebarHeader } from '../sidebar_header';
import { MainLinks } from '../sidebar_links';
import { User } from '../sidebar_user';

export default function Sidebar() {
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
}
