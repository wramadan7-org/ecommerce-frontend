import React from 'react'
import Navbar from '../component/NavigationBar'
import {
	Container, Jumbotron, Form, FormGroup, Label, Input, Button
} from 'reactstrap'


class CreateItem extends React.Component {
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
					<Form>
						<FormGroup>
							<Label>Name</Label>
							<Input type="text" name="item" placeholder="Name Item" />
						</FormGroup>

						<FormGroup>
							<Label>Price</Label>
							<Input type="text" name="price" placeholder="Price Item" />
						</FormGroup>

						<FormGroup>
							<Label>Category</Label>
							<Input type="text" name="category" placeholder="Category Item" />
						</FormGroup>

						<FormGroup>
							<Label>Description</Label>
							<Input type="textarea" name="text" placeholder="Description" />
						</FormGroup>
						<Button>Submit</Button>
					</Form>
				</Container>
			</React.Fragment>
		)
	}
}

export default CreateItem