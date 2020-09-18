import React from 'react'
import {
	Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink,
	Container
} from 'reactstrap'

import {Link} from 'react-router-dom'

class NavigationBar extends React.Component {
	render() {
		return(
			<div>
				<Navbar color="dark" dark expand="md">
					<Container>
						<NavbarBrand>RAMSZ</NavbarBrand>
						<Collapse isOpen={true} navbar>
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