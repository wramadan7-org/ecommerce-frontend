import React from 'react'
import {} from 'reactstrap'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Episode from './pages/Episode'
import Product from './product/Product'
import CreateItem from './product/CreateItem'
import EditItem from './product/EditItem'

import Category from './category/Category'
import CreateCategory from './category/CreateCategory'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Home} exact />
          <Route path="/admin/product" component={Product} exact />
          <Route path="/admin/product/create" component={CreateItem} exact />
          <Route path="/admin/product/edit/:id" component={EditItem} exact />
          <Route path="/admin/episode" component={Episode} exact />

          <Route path="/admin/category" component={Category} exact />
          <Route path="/admin/category/create" component={CreateCategory} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App