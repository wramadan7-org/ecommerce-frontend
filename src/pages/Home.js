import React from 'react'
import Navbar from '../component/NavigationBar'
import {
	Container
} from 'reactstrap'


class Home extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Navbar />
				<Container>
					Home
				</Container>
			</React.Fragment>
		)
	}
}

export default Home