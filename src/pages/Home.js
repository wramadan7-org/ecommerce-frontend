import React from 'react'
import {default as axios} from 'axios'
import Navbar from '../component/NavigationBarUser'
import jas from '../assets/images/jas.jpg'
import star from '../assets/images/Star.png'
import {
	Container,
	// Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, UncontrolledCarousel,
	Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
	Col, Row, Button
} from 'reactstrap'
import Syle from '../assets/style.css'
import {Link} from 'react-router-dom'



class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dataAPI: {},
			dataCategory: {}
		}
	}

	getData = async() => {
		let {data} = await axios.get('http://localhost:8080/items')
		this.setState({dataAPI: data})
		console.log(data)
	}

	getCategory = async() => {
		let {data} = await axios.get('http://localhost:8080/category')
		this.setState({dataCategory: data})
		console.log(data)
	}

	async componentDidMount() {
		await this.getCategory()
		await this.getData()
	}

	// carousel() {
	// 	let items = [
	// 		{
	// 			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
	// 		    altText: 'Slide 1',
	// 		    caption: 'Slide 1',
	// 		    header: 'Slide 1 Header',
	// 		    key: '1'
	// 		},
	// 		{
	// 			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
	// 		    altText: 'Slide 2',
	// 		    caption: 'Slide 2',
	// 		    header: 'Slide 2 Header',
	// 		    key: '2'
	// 		},
	// 		{
	// 			src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
	// 		    altText: 'Slide 3',
	// 		    caption: 'Slide 3',
	// 		    header: 'Slide 3 Header',
	// 		    key: '3'
	// 		}
	// 	]
	// }

	render() {
		return(
			<>
				<Navbar />
				<Container className="mt-5">
					<h1>Carousel</h1>

					<h1 className="mt-5">Category</h1>
					<h6 className="text-muted">What are you currently looking for</h6>
					<Row className="mt-4">
						{Object.keys(this.state.dataCategory).length && this.state.dataCategory.data.result.map(item => {
							return(
								<Col md={3}>
									<Link to={"/category/detail/"+item.id_category}>
										<Button>{item.name_category}</Button>
									</Link>
								</Col>
								)
							})}
					</Row>

					<h1 className="mt-5">New</h1>
					<h6 className="text-muted">You’ve never seen it before!</h6>
					<Row>
						{Object.keys(this.state.dataAPI).length && this.state.dataAPI.data.result.map(item => {
							return(
								<Col md={3} sm={6}>
									<Card className="shadow">
										<CardImg src={jas} />
										<CardBody>
											<CardTitle className="title">{item.name}</CardTitle>
											<CardText className="price">{item.price}</CardText>
											<CardSubtitle className="subtitle">{item.category}</CardSubtitle>
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

export default Home