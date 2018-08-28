import React from "react";
import { Menu, Input, TextArea } from "semantic-ui-react";
import FilterLink from '../containers/FilterLink'
import {Link} from 'react-router-dom'


const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>Profile Page</Menu.Item>
    </Menu.Menu>
    <Menu.Menu>
      <Menu.Item>Aboot Kwitter</Menu.Item>
    </Menu.Menu>

      
        <TextArea placeholder="New Kweet"/>
      
    <Menu.Menu>
        <Link
        to={'/Main/'}
        
        >Main</Link>

    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item name="logout" />
    </Menu.Menu>
  </Menu>
);

export default NavBar;
