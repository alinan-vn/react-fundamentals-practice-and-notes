import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class Navigation extends React.Component {

    render(){
        return(
            <div>
                <Navbar className='navigation' color="light" light expand="md">
                    <NavbarBrand className='navigation-main-item' href="/">React Practice</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem className='navigation-reg-item'>
                            <NavLink href="/function-components-practice">FunctionComponents</NavLink>
                        </NavItem>
                        <NavItem className='navigation-reg-item'>
                            <NavLink href="https://github.com/alinan-vn/">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;