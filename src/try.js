// import React from 'react'

// export default try
// <React.Fragment>
//          {/*<SeriesList text = 'Hello world'/>*/}
//         {/*<Sapa name = "Wahyu Ramadan"/>*/} {/* Functional component */}
//         <Sapa2 name = "Wahyu Aldyansah"/> {/*Class component*/}
//       </React.Fragment>
// 
// 
// import React from 'react'
// import logo from './logo.svg'
// import './App.css'
// 
// // import Episode from './pages/Home'
// // import SeriesList from './component/SeriesList'
// // import Sapa from './component/Sapa'
// import Sapa2 from './component/Sapa2'
// 
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isShow: true
//     }
//     
//   }
// 
// //   App akan emmanggil sapa2 yang berisi nama ramss
// //   halaman ini mmenjalankan pertama cunstructor yg berisi state isShow: true
// //   jika isShow tru maka akan menampilkan ramsss
// //   kemudian setelah dirender, akan menampilkan didmount, karena didmount ada sittimeout setelah 3detik
// //   maka state akan diganti menggunakan setState yg didalamnya berisi isShow diganti menjadi false
// //   function componentWillUnmounnt di Sapa2 akan dijalankan
// 
//   componentDidMount() {
//     setTimeout(() => {
//       //setState untuk mengubah variabel di state
//       this.setState({
//         isShow: false
//       })
//     }, 3000)
//   }
// 
//   render() {
//     return(
//       <div>
//         {this.state.isShow&&(
//           <Sapa2 name = "Ramss"/>
//           )}
//       </div>
//     )
//   }
// }
// 
// export default App

// 
// import React from 'react'
// import {default as axios} from 'axios'
// import {
//   Container,
//   Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink,
//   Jumbotron, Table
// } from 'reactstrap'
// 
// class App extends React.Component {
// 
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: {}
//     }
//   }
// 
//   // getData = async (url) => {
//   //   const data = await fetch(url)
//   //   const result = await data.json()
//   //   return result
//   // }
// 
//   async componentDidMount() {
//     // const data = await this.getData('https://rickandmortyapi.com/api/episode') //mendapatkan data dari getData, akan ditunggu dulu sebelum menjalankan kode dibawahnya
//     const {data} = await axios.get('https://rickandmortyapi.com/api/episode') //ini menggunajan axios, tidak perlu fungsi getData fetch
//     this.setState({data}) //ketika sudah mengambil data dari API maka masukkan ke dalam ganti state diatas yg berisi objct kosong dengan setState ygberisi data dari API
//   }
// 
//   render() {
// 
// 
//     return (
// 
//       <React.Fragment>
// 
//         {/* <div> */}
//         {/*   <Navbar color="dark" dark expand="md"> */}
//         {/*     <Container> */}
//         {/*       <NavbarBrand>RAMSZ</NavbarBrand> */}
//         {/*       <Collapse isOpen={true} navbar> */}
//         {/*         <Nav navbar> */}
//         {/*           <NavItem> */}
//         {/*             <NavLink>Home</NavLink> */}
//         {/*           </NavItem> */}
//         {/*           <NavItem> */}
//         {/*             <NavLink>About Us</NavLink> */}
//         {/*           </NavItem> */}
//         {/*         </Nav> */}
//         {/*       </Collapse> */}
//         {/*     </Container> */}
//         {/*   </Navbar> */}
//         {/* </div> */}
// 
//         <div>
//           <Container>
//             <Jumbotron>
//               <h1>List Ricky and Morty</h1>
//             </Jumbotron>
//             <Table md={3} mr="auto">
//                   <thead>
//                     <tr>
//                       <th>No</th>
//                       <th>Episode</th>
//                       <th>Name</th>
//                     </tr>
//                   </thead>
//             {/*Jika data di state sudah ada maka tampilkan data dari object results dari api*/}
//             {Object.keys(this.state.data).length && this.state.data.results.map(items => {
//               return(
//                 
//                   <tbody>
//                     <tr>
//                       <td>{items.id}</td>
//                       <td>{items.episode}</td>
//                       <td>{items.name}</td>
//                     </tr>
//                   </tbody>
//                 
//                 )
//               })}
//             </Table>
//           </Container>
//           
//         </div>
//         </React.Fragment>
// 
// 
//         )
//   }
// }
// 
// export default App