import React from 'react'
import {
	Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler,
	Container, Input, Button, Col, Row
} from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
import search from '../assets/images/Search.png'
import filter from '../assets/images/Vector1.png'
import iCart from '../assets/images/cart.png'
import Style from '../assets/style.css'

class NavigationBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			navbarOpen: false
		}
	}

	render() {
		return (
			<div>
				<Navbar color="light" light className="shadow" expand="lg">
					<Container>
						<NavbarBrand className="brand">
							<Link to="/"><img src={logo} /></Link>
						</NavbarBrand>
						<NavbarToggler onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })} />
						<Collapse isOpen={this.state.navbarOpen} navbar>
							<Nav navbar>
								<NavItem className="search">
									<Input className="rounded-pill form-control s" type="text" name="search" placeholder="Search" />
									<i className="iconSearch"><img src={search} /></i>
								</NavItem>
								<NavItem className="ml-2">
									{/* <img src="../../public/logo192.png" /> */}
									<Button color="transparant"><img src={filter} /></Button>
								</NavItem>
							</Nav>

							<Nav className="ml-auto align-items-center" navbar>
								<NavItem className="mr-5" >
									<Link className="nav-link" to="/cart"><img src={iCart} /></Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/login"><Button className="btn navlogin rounded-pill">Login</Button></Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/reister"><Button className="btn navregister rounded-pill">Signup</Button></Link>
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