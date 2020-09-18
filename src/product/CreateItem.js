import React from 'react'
import {default as axios} from 'axios'
import Navbar from '../component/NavigationBar'
import {
	Container, Jumbotron, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import qs from 'querystring'

import {Link} from 'react-router-dom'


class CreateItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			price: '',
			id_category: '',
			description: ''
		}
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	handlerSubmit = async(event) => {
		event.preventDefault()
		// console.log(this.state)
		await axios.post('http://localhost:8080/items', qs.stringify(this.state))
		this.props.history.push("/admin/product")
	}

	render() {
		return(
			<React.Fragment>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Create Item</h1>
					</Container>
				</Jumbotron>
				<Container md={6}>
					<Form onSubmit={this.handlerSubmit}>
						<FormGroup>
							<Label>Name</Label>
							<Input type="text" name="name" placeholder="Name Item" onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Price</Label>
							<Input type="text" name="price" placeholder="Price Item" onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Id Category</Label>
							<Input type="number" name="id_category" placeholder="Category Item" onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label>Description</Label>
							<Input type="textarea" name="description" placeholder="Description" onChange={this.handlerChange} />
						</FormGroup>
						
						<FormGroup>
							<Label></Label>
							<Button type="submit">Submit</Button>
							<Link to="/admin/product" className="ml-4"><Button>Back</Button></Link>
						</FormGroup>
					</Form>
				</Container>
			</React.Fragment>
		)
	}
}

export default CreateItem