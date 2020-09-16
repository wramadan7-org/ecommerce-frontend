import React, {useState} from 'react'
//use state untuk membuat state, disebut dengan hook

function Sapa(props) {
	// eslint-disable-next-line no-lone-blocks
	{/*const [name, setName] = useState('Bandung')
	//name adalah getter dan setName adalah statenya

	setTimeout(() => {
		setName('RAMZZZ')
	}, 2000)
	//mengeset jika sudah 2 detik maka name Bandung akan berubah menjadi RAMZZZ karena sudah menjalankan seternya ke value yg baru
	*/}
	return (
		<div>Hallo {props.name}</div>
	)
}

export default Sapa