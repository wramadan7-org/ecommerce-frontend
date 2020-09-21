import React from 'react'
import {default as axios} from 'axios'
import Navbar from '../component/NavigationBar'
import {
	Container, Jumbotron, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import qs from 'querystring'

import {Link} from 'react-router-dom'

class EditItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			id_category: '',
			name_category: ''
		}
	}

	componentDidMount = async() => {
		let id = this.props.match.params.id
		// console.log(id)
		let {data} = await axios.get(`http://localhost:8080/category/${id}`)
		this.setState(data.data)
		// console.log(this.state)
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	handlerSubmit = async(event) => {
		event.preventDefault()
		console.log(this.state)
		let id = this.props.match.params.id
		await axios.put(`http://localhost:8080/category/put/${id}}`, qs.stringify(this.state))
		this.props.history.push("/admin/category")
	}

	render() {
		return(
			<React.Fragment>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Edit Category</h1>
					</Container>
				</Jumbotron>
				<Container md={6}>
					<Form onSubmit={this.handlerSubmit}>
						<FormGroup>
							<Label>Name</Label>
							<Input type="text" name="name_category" value={this.state.name_category} onChange={this.handlerChange} />
						</FormGroup>

						<FormGroup>
							<Label></Label>
							<Button type="submit">Edit</Button>
							<Link to="/admin/category" className="ml-4"><Button>Back</Button></Link>
						</FormGroup>
					</Form>
				</Container>
				</React.Fragment>
		)
	}
}

export default EditItem