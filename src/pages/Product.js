import React from 'react'
// import Navbar from '../component/NavigationBar'
import {default as axios} from 'axios'
import {
	Container, Jumbotron, Table, Button,
	Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import Navbar from '../component/NavigationBar'
import {Link} from 'react-router-dom'

class Product extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataAPI: {}
		}
	}

	// getData = async (url) => {
	// 	const dataAPI = await fetch(url)
	// 	const result = await dataAPI.json()
	// 	return result
	// }

	componentDidMount() {
		// const {dataAPI} = await axios.get('http://localhost:8080/items')
		// this.setState({dataAPI})
		// console.log(dataAPI)
		axios.get('http://localhost:8080/items')
		.then(res=>{
			const dataAPI = res.data
			console.log(dataAPI)
			this.setState({dataAPI})
		})
	}

	render() {
		return(
			<div>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Product Admin</h1>
					</Container>
					</Jumbotron>
				<Container className="mt-2">
					<div className="mb-3">
						<Link to="/admin/create"><Button>Create Item</Button></Link>
					</div>
					<Table bordered>
						<thead>
							<tr>
								<th>No</th>
								<th>Name</th>
								<th>Price</th>
								<th>Category</th>
								<th>Description</th>
								<th className="text-center">Actions</th>
							</tr>
						</thead>
				{Object.keys(this.state.dataAPI).length && this.state.dataAPI.data.result.map(item=>{
					return(
						<tbody>
							<tr>
								<td>{item.id_item}</td>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.category}</td>
								<td>{item.description}</td>
								<td className="text-center">
									<Button>Edit</Button> || <Button>Delete</Button>
								</td>
							</tr>
						</tbody>
						)
					})}
					</Table>
				</Container>
			</div>
			)
	}

}

export default Product