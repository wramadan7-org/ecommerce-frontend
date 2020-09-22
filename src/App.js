import React from 'react'
import { } from 'reactstrap'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Lah from './Lah';
import Home from './pages/Home'
import Episode from './pages/Episode'
import Product from './pages/product/Product'
import CreateItem from './pages/product/CreateItem'
import EditItem from './pages/product/EditItem'

import detailCategory from './pages/DetailCategory'

import Category from './pages/category/Category'
import CreateCategory from './pages/category/CreateCategory'
import EditCategory from './pages/category/EditCategory'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/category/detail/:id" component={detailCategory} exact />

          <Route path="/admin/product" component={Product} exact />
          <Route path="/admin/product/create" component={CreateItem} exact />
          <Route path="/admin/product/edit/:id" component={EditItem} exact />
          <Route path="/admin/episode" component={Episode} exact />

          <Route path="/admin/category" component={Category} exact />
          <Route path="/admin/category/create" component={CreateCategory} exact />
          <Route path="/admin/category/edit/:id" component={EditCategory} exact />

          <Route path="/try" component={Lah} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App