import React from 'react'
import Navbar from '../component/NavigationBar'
import {
	Container, Jumbotron, Button, Form, FormGroup, Input, Label
} from 'reactstrap'
import qs from 'querystring'
import {default as axios} from 'axios'

class CreateCategory extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}

	handlerChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	handlerSubmit = async(event) => {
		event.preventDefault()
		let {data} = await axios.post('http://localhost:8080/category', qs.stringify(this.state))
		this.props.history.push("/admin/category")
	}

	render(){
		return(
			<>
				<Navbar />
				<Jumbotron>
					<Container>
						<h1>Create Category</h1>
					</Container>
				</Jumbotron>
				<Container>
					<Form onSubmit={this.handlerSubmit}>
						<FormGroup>
							<Label>Name</Label>
							<Input type="text" name="name" placeholder="Name" onChange={this.handlerChange} />
						</FormGroup>
						<FormGroup>
							<Label></Label>
							<Button>Submit</Button>
						</FormGroup>
					</Form>
				</Container>
			</>
			)
	}
}

export default CreateCategory