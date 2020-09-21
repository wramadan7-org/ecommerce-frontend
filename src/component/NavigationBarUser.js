import React from 'react'
import {
	Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink,
	Container, Input, Button
} from 'reactstrap'

import {Link} from 'react-router-dom'
import logo from '../assets/images/Logo.png'
import search from '../assets/images/Search.png'
import filter from '../assets/images/Vector1.png'
import iCart from '../assets/images/cart.png'
import Style from '../assets/style.css'

class NavigationBar extends React.Component {
	render() {
		return(
			<div>
				<Navbar color="light" className="shadow" dark expand="md">
					<Container>
						<NavbarBrand className="mr-5">
							<Link to="/"><img src={logo} /></Link>
						</NavbarBrand>
						<Collapse isOpen={true} navbar>
							<Nav>
								<NavItem className="search">
									<Input type="text" name="search" placeholder="Search" />
									<i className="iconSearch"><img src={search} /></i>
								</NavItem>
								<NavItem className="ml-2">
									{/* <img src="../../public/logo192.png" /> */}
									<Button color="transparant"><img src={filter} /></Button>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem className="mr-5">
									<Link className="nav-link" to="/cart"><img src={iCart} /></Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/login"><Button className="btn login" color="dark">Login</Button></Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/reister"><Button className="btn register" color="dark">Signup</Button></Link>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default NavigationBar