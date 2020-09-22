import React from 'react'
import Navbar from '../component/NavigationBarUser'
import { default as axios } from 'axios'
import {
	Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
	Col, Row, Button, Container
} from 'reactstrap'
import jas from '../assets/images/jas.jpg'
import star from '../assets/images/Star.png'

class detailCategory extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataAPI: {}
		}
	}

	componentDidMount = async () => {
		let id = this.props.match.params.id
		// console.log(id)
		let { data } = await axios.get(`http://localhost:8080/category/detail/${id}`)
		this.setState({ dataAPI: data.data })
		console.log(this.state)
	}

	render() {
		return (
			<>
				<Navbar />
				<Container className="mt-5">
					<h1 className="font-weight-bold">Detail</h1>
					<Row>
						{Object.keys(this.state.dataAPI).length && this.state.dataAPI.result.map(item => {
							return (
								<Col md={3} sm={6}>
									<Card className="shadow">
										<CardImg src={jas} />
										<CardBody>
											<CardTitle className="title font-weight-bold">{item.name}</CardTitle>
											<CardText className="price font-weight-bold">Harga</CardText>
											<CardSubtitle className="subtitle">{item.name_category}</CardSubtitle>
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
											<img src={star} />
										</CardBody>
									</Card>
								</Col>
							)
						})}
					</Row>
				</Container>

			</>
		)
	}
}

export default detailCategory