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


// import React from 'react'
// import {Table, Button, Modal, ModalBody, ModalFooter, Input, Form} from 'reactstrap'
// import {default as axios} from 'axios'
// import qs from 'querystring'
// 
// class ManageUser extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       data: [],
//       modalOpen: false,
//       id: '',
//       name: '',
//       email: ''
//     }
//   }
//   async componentDidMount(){
//     await this.getData()
//   }
//   getData = async()=>{
//     const {data} = await axios.get('http://localhost:8080/users')
//     this.setState({data: data.data})
//   }
//   editUser = async (id)=>{
//     const {data} = await axios.get(`http://localhost:8080/users/${id}`)
//     this.setState({modalOpen: true, ...data.data}, ()=>{
//       console.log('ok')
//     })
//   }
// 
//   changeInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
// 
//   formSubmit = async (e)=>{
//     e.preventDefault()
//     await axios.put(`http://localhost:8080/users/${this.state.id}`, qs.stringify({name: this.state.name, email: this.state.email}))
//     this.setState({modalOpen: false}, async()=>{
//       await this.getData()
//     })
//   }
// 
//   deleteUser = async (id)=>{
//     await axios.delete(`http://localhost:8080/users/${id}`)
//     this.setState({
//       modalOpen: false
//     }, ()=>{
//       this.getData()
//     })
//   }
// 
//   render(){
//     return(
//       <>
//         <Table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map(item=>{
//               return(
//                 <React.Fragment>
//                   <tr>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>
//                       <Button size="sm" color="warning" onClick={()=>this.editUser(item.id)}>Edit</Button> &nbsp;
//                       <Button size="sm" color="danger" onClick={()=>this.deleteUser(item.id)}>Delete</Button>
//                     </td>
// 
//                   </tr>
//                 </React.Fragment>
//               )
//             })
//             }
//           </tbody>
//         </Table>
//         <Modal isOpen={this.state.modalOpen}>
//           <ModalBody>
//             <Form onSubmit={this.formSubmit}>
//               {/* <Input name='id' onChange={this.changeInput} value={this.state.id} /> */}
//               <Input name='name' onChange={this.changeInput} value={this.state.name} />
//               <Input name='email' onChange={this.changeInput} value={this.state.email} />
//               <Button>Submit</Button>
//             </Form>
//           </ModalBody>
//           <ModalFooter>
//             <Button>Submit</Button>
//             <Button onClick={()=>this.setState({modalOpen: false})}>Close</Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     )
//   }
// }
// 
// export default ManageUser