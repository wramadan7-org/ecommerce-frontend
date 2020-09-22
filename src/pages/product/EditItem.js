import React from 'react'
import { default as axios } from 'axios'
import Navbar from '../../component/NavigationBar'
import {
	Container, Jumbotron, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import qs from 'querystring'

import { Link } from 'react-router-dom'

class EditItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			id_category: '',
			price: '',
			description: ''
		}
	}

	componentDidMount = async () => {
		let id = this.props.match.params.id
		let { data } = await axios.get(`http://localhost:8080/items/detail/${id}`)
		this.setState(data.data)
		// console.log(this.state)
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handlerSubmit = async (event) => {
		event.preventDefault()
		// console.log(this.state)
		let id = this.props.match.params.id
		await axios.put(`http://localhost:8080/items/put/update/${id}`, qs.stringify(this.state))
		this.props.history.push("/admin/product")
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Edit Item</h1>
					</Container>
				</Jumbotron>
				<Container md={6}>
					<Form onSubmit={this.handlerSubmit}>
						<FormGroup>
							<Label>Name</Label>
							<Input type="text" name="name" value={this.state.name} onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Id Category</Label>
							<Input type="number" name="id_category" value={this.state.id_category} onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Price</Label>
							<Input type="text" name="price" value={this.state.price} onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Description</Label>
							<Input type="textarea" name="description" value={this.state.description} onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label></Label>
							<Button type="submit">Edit</Button>
							<Link to="/admin/product" className="ml-4"><Button>Back</Button></Link>
						</FormGroup>
					</Form>
				</Container>
			</React.Fragment>
		)
	}
}

export default EditItem