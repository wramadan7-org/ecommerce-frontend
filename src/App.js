import React from 'react'
import {} from 'reactstrap'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Episode from './pages/Episode'
import Product from './pages/Product'
import CreateItem from './pages/CreateItem'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Home} exact />
          <Route path="/admin/product" component={Product} exact />
          <Route path="/admin/create" component={CreateItem} exact />
          <Route path="/admin/episode" component={Episode} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App