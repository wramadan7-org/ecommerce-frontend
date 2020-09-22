import React from 'react'
import Navbar from '../../component/NavigationBar'
import {
	Container, Jumbotron,
	Table, Button, Label, Input, Form,
	Modal, ModalHeader, ModalBody, ModalFooter,
	Pagination, PaginationItem, PaginationLink
} from 'reactstrap'
import { default as axios } from 'axios'
import { Link } from 'react-router-dom'
import qs from 'querystring'


class Category extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dataAPI: {},
			search: '',
			modalOpen: false,
			editingData: {}
		}
	}

	getData = async () => {
		let { data } = await axios.get('http://localhost:8080/category')
		// console.log(data)
		this.setState({ dataAPI: data })
	}

	async componentDidMount() {
		await this.getData()
	}

	openModal = (id) => {
		this.setState(`{modalOpen:true},`)
	}

	insertCategory = async (event) => {
		let { data } = await axios.post(`http://localhost:8080/category`)
		console.log(data)
	}

	editCategory = async (id) => {
		const { data } = await axios.get(`http://localhost:8080/category/${id}`)
		this.setState({ modalOpen: true, editingData: data.data })
		console.log(this.state)
	}

	deleteCategory = async (id) => {
		console.log(id)
		await axios.delete(`http://localhost:8080/category/${id}`)
		await this.getData()
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
		console.log(this.state.search)
	}

	render() {
		return (
			<>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Manage Category</h1>
					</Container>
				</Jumbotron>
				<Container>
					{/* <Button className="mb-3" onClick={() => this.openModal()}>Create Category</Button> */}
					<Link to="/admin/category/create"><Button className="mb-3">Create Category</Button></Link>
					<Input className="ml-auto w-25" name="search" type="text" placeholder="Serach" onChange={this.handlerChange} />
					<Table bordered hover responsive className="mt-3">
						<thead>
							<tr>
								<th className="">No</th>
								<th className="text-center">Name</th>
								<th className="text-center">Actions</th>
							</tr>
						</thead>
						{Object.keys(this.state.dataAPI).length && this.state.dataAPI.data.result.map(item => {
							return (
								<tbody>
									<tr>
										<td scope="row" width="10px">{item.id_category}</td>
										<td>{item.name_category}</td>
										<td className="text-center">
											{/* <Button size="md" className="mx-2" onClick={() => this.editCategory(item.id_category)}>Edit</Button> */}
											<Link to={"/admin/category/edit/" + item.id_category}><Button size="md" className="mx-2">Edit</Button></Link>
											||
											<Button size="md" className="mx-2" onClick={() => this.deleteCategory(item.id_category)}>Delete</Button>
										</td>
									</tr>
								</tbody>
							)
						})}
						<Pagination aria-label="Page navigation example">
							<PaginationItem>
								<PaginationLink first href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink previous href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">
									1
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink next href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink last href="#" />
							</PaginationItem>
						</Pagination>
					</Table>
				</Container>
				{/* <Modal isOpen={this.state.modalOpen}> */}
				{/* 	<ModalHeader> */}
				{/* 		<h2>Create Category</h2> */}
				{/* 	</ModalHeader> */}
				{/* 	<ModalBody> */}
				{/* 		<Form> */}
				{/* 			<Label>Id</Label> */}
				{/* 			<Input type="text" name="id" onChange={this.handlerChange} /> */}
				{/* 		</Form> */}
				{/* 		<Form> */}
				{/* 			<Label>Name</Label> */}
				{/* 			<Input type="text" name="name" value={this.state.editingData.result} onChange={this.handlerChange} /> */}
				{/* 			<Button type="submit" onSubmit={this.insertCategory}>Submit</Button> */}
				{/* 			<Button onClick={() => this.setState({modalOpen:false})}>Cancle</Button> */}
				{/* 		</Form> */}
				{/* 	</ModalBody> */}
				{/* 	<ModalFooter> */}
				{/* 	</ModalFooter> */}
				{/* </Modal> */}
			</>
		)
	}
}

export default Category