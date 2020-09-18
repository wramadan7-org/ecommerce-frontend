import React from 'react'
import Navbar from '../component/NavigationBar'
import {
	Container, Jumbotron,
	Table, Button, Label, Input, Form,
	Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import {default as axios} from 'axios'
import {Link} from 'react-router-dom'
import qs from 'querystring'


class Category extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dataAPI: {},
			modalOpen: false,
			id: '',
			name: ''
		}
	}

	getData = async() => {
		let {data} = await axios.get('http://localhost:8080/category')
		// console.log(data)
		this.setState({dataAPI: data})
	}

	async componentDidMount() {
		await this.getData()
	}

	openModal = () => {
		this.setState({modalOpen:true})
	}

	insertCategory = async(event) => {
		let {data} = await axios.post(`http://localhost:8080/category`)
		console.log(data)
	}

	deleteCategory = async(id) => {
		console.log(id)
		await axios.delete(`http://localhost:8080/category/${id}`)
		await this.getData()
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	render() {
		return(
			<>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Category Admin</h1>
					</Container>
				</Jumbotron>
				<Container>
					{/* <Button className="mb-3" onClick={() => this.openModal()}>Create Category</Button> */}
					<Link to="/admin/category/create"><Button className="mb-3">Create Category</Button></Link>
					<Table bordered>
						<thead>
							<tr>
								
								<th>No</th>
								<th className="text-center">Name</th>
								<th className="text-center">Actions</th>
							</tr>
						</thead>
						{Object.keys(this.state.dataAPI).length && this.state.dataAPI.data.result.map(item => {
							return(
								<tbody>
									<tr>
										<td>{item.id_category}</td>
										<td>{item.name_category}</td>
										<td className="text-center">
											<Button size="md" className="mx-2" onClick={() => this.openModal(item.id_category)}>Edit</Button>
											||
											<Button size="md" className="mx-2" onClick={() => this.deleteCategory(item.id_category)}>Delete</Button>
										</td>
									</tr>
								</tbody>
							)
						})}
					</Table>
				</Container>
				<Modal isOpen={this.state.modalOpen}>
					<ModalHeader>
						<h2>Create Category</h2>
					</ModalHeader>
					<ModalBody>
						<Form>
							<Label>Id</Label>
							<Input type="text" name="id" onChange={this.handlerChange} />
						</Form>
						<Form>
							<Label>Name</Label>
							<Input type="text" name="name" placeholder="Name" onChange={this.handlerChange} />
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button type="submit" onSubmit={this.insertCategory}>Submit</Button>
						<Button onClick={() => this.setState({modalOpen:false})}>Cancle</Button>
					</ModalFooter>
				</Modal>
			</>
		)
	}
}

export default Category