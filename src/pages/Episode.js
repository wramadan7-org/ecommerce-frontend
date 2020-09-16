import React from 'react';
import {default as axios} from 'axios'

import Navbar from '../component/NavigationBar'
import {
  Jumbotron, Container, Table, Button
} from 'reactstrap'

class Episode extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  // getData = async (url) => {
  //   const data = await fetch(url)
  //   const result = await data.json()
  //   return result
  // }

  async componentDidMount() {
    // const data = await this.getData('https://rickandmortyapi.com/api/episode') //mendapatkan data dari getData, akan ditunggu dulu sebelum menjalankan kode dibawahnya
    const {data} = await axios.get('https://rickandmortyapi.com/api/episode') //ini menggunajan axios, tidak perlu fungsi getData fetch
    this.setState({data}) //ketika sudah mengambil data dari API maka masukkan ke dalam ganti state diatas yg berisi objct kosong dengan setState ygberisi data dari API
  }

  render() {


    return (

      <React.Fragment>
        <Navbar />
        <div className="mt-5">
          <Container>
            <Jumbotron>
              <h1>Home Admin</h1>
            </Jumbotron>
            <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Episode</th>
                      <th>Name</th>
                      <th className="text-center">Aksi</th>
                    </tr>
                  </thead>
            {/*Jika data di state sudah ada maka tampilkan data dari object results dari api*/}
            {Object.keys(this.state.data).length && this.state.data.results.map(items => {
              return(
                
                  <tbody>
                    <tr>
                      <td>{items.id}</td>
                      <td>{items.episode}</td>
                      <td>{items.name}</td>
                      <td className="text-center">
                        <Button color="warning" className="mr-3 ml-3">Edit</Button>
                        <Button color="danger" className="ml-3">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                
                )
              })}
            </Table>
          </Container>
          
        </div>
        </React.Fragment>


        )
  }
}

export default Episode;
