import React from 'react'

class Sapa2 extends React.Component {
	//lfycycle
	//constructor adalah program yg akan dijalankan pertama kali saat mengakses Sapa2
	constructor(props) {
		super(props)
		console.log('Pertama')
	}

	//didmount dijalankan ketika render sudah diakses
	componentDidMount() {
		console.log('Mounting')
	}

	//akan dijalankan ketika komponent dihilangkan dari render
	componentWillUnmount() {
		console.log('before unmount')
	}
	render() {
		console.log('Render...')
		return(
			<div>
				Hallo {this.props.name}
			</div>
		)
	}
}

export default Sapa2