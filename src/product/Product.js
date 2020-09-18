import React from 'react'
// import Navbar from '../component/NavigationBar'
import {default as axios} from 'axios'
import {
	Container, Jumbotron, Table, Button
	// Modal, ModalHeader, ModalBody, ModalFooter, Input, Label,
} from 'reactstrap'
import Navbar from '../component/NavigationBar'
import {Link} from 'react-router-dom'
// import throttle from 'loadash.throttle'

class Product extends React.Component {
	constructor(props) {
		super(props)
		// throttle(this.deleteItem, 1000)
		this.state = {
			dataAPI: {},
			modalOpen: false
		}
	}

	// getData = async (url) => {
	// 	const dataAPI = await fetch(url)
	// 	const result = await dataAPI.json()
	// 	return result
	// }

	deleteItem = async(id) => {
		await axios.delete(`http://localhost:8080/items/delete/${id}`)
		await this.getData()
		// console.log(haps)
		// this.setState(this.state.dataAPI)
		// this.props.history.push("/admin")
	}

	async componentDidMount() {
		// const {dataAPI} = await axios.get('http://localhost:8080/items')
		// this.setState({dataAPI})
		// console.log(dataAPI)
		// axios.get('http://localhost:8080/items')
		// .then(res=>{
		// 	const dataAPI = res.data
		// 	console.log(dataAPI)
		// 	this.setState({dataAPI})
		// })
		await this.getData()
		
	}

	getData = async () => {
		const {data} = await axios.get('http://localhost:8080/items/')
		console.log(data)
		this.setState({dataAPI: data})
	}

	render() {
		return(
			<>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Product Admin</h1>
					</Container>
					</Jumbotron>
				<Container className="mt-2" md={6}>
					<div className="mb-3">
						<Link to="/admin/product/create"><Button>Create Item</Button></Link>
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
									{/* <Button size="md" onClick={() => this.editItem(item.id_item)}>Edit</Button> */}
									<Link to={"/admin/product/edit/"+item.id_item}><Button className="mx-2">Edit</Button></Link>
									 || 
									 <Button size="md" onClick={() => this.deleteItem(item.id_item)} className="mx-2">Delete</Button>
								</td>
							</tr>
						</tbody>
						)
					})}
					</Table>
					{/* <Modal isOpen={this.state.modalOpen}> */}
					{/* 	<ModalHeader> */}
					{/* 		<h3>Edit</h3> */}
					{/* 	</ModalHeader> */}
					{/* 	<ModalBody> */}
					{/* 		<Form> */}
					{/* 			<Label>Name</Label> */}
					{/* 			<Input name="name" className="mb-3" onChange value={this.state.editingItem.name} /> */}
					{/* 			<Label>Category</Label> */}
					{/* 			<Input name="id_category" className="mb-3" value={this.state.editingItem.id_category} /> */}
					{/* 			<Label>Price</Label> */}
					{/* 			<Input name="price" className="mb-3" value={this.state.editingItem.price} /> */}
					{/* 			<Label>Description</Label> */}
					{/* 			<Input name="description" className="mb-3" value={this.state.editingItem.description} /> */}
					{/* 		</Form> */}
					{/* 	</ModalBody> */}
					{/* 	<ModalFooter> */}
					{/* 		<Button>SUBMIT</Button> */}
					{/* 		<Button onClick={() => this.setState({modalOpen:false})}>CLOSE</Button> */}
					{/* 	</ModalFooter> */}
					{/* </Modal> */}
				</Container>
			</>
			)
	}

}

export default Product