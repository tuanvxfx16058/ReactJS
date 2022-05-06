import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';



export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
           
            <div >
                <Navbar style={{backgroundColor:'#007bff'}} dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">  </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/nhanvien'><i class="fa fa-users" aria-hidden="true"></i> Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/phongban'><i class="fa fa-briefcase" aria-hidden="true"></i>Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/bangluong'><i class="fa fa-credit-card" aria-hidden="true"></i>Bảng lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
              
            </div>
        );
    }
}
