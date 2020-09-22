import React from 'react'
import {
	Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler,
	Container, Col
} from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

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
				<Navbar color="light" light className="shadow" expand="md">
					{/* light diatas adalah warna untuk isi navbar */}
					<Container>
						<NavbarBrand>
							<img src={logo} />
						</NavbarBrand>
						<NavbarToggler className="dark" onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })} />
						<Collapse isOpen={this.state.navbarOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link className="nav-link" to="/admin">Home</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/admin/product">Product</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/admin/category">Category</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/admin/episode">Episode</Link>
								</NavItem>
								<NavItem>
									<NavLink href="#">About Us</NavLink>
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