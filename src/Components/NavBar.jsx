import React from "react";
import { Menu, TextArea, Modal, Button } from "semantic-ui-react";


const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item><Button>Profile Page</Button></Menu.Item>
    </Menu.Menu>
    <Menu.Menu>
      <Menu.Item><Button>Aboot Kwitter</Button></Menu.Item>
    </Menu.Menu>

    <Menu.Item>
      <Modal trigger={<Button>New Kweet</Button>} closeIcon><TextArea placeholder="New Kweet" style={{ width: '100%' }} /></Modal>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item><Button>Logout</Button></Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
