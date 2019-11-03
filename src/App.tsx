import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toolbar } from '@material-ui/core';
import { ConnectAppBar } from './component/app-bar/connect';
import { StoreProvider } from './component/common/provider/store';
import { ConnectCategoryList } from './component/category-list/connect';
import { ConnectEditCategory } from './component/category-editor/edit/connect';
import { ConnectAddCategory } from './component/category-editor/add/connect';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div>
          <ConnectAppBar />
          <Toolbar />
          <Switch>
            <Route path="/categories/edit/:categoryId">
              <ConnectEditCategory />
            </Route>
            <Route path="/categories/create">
              <ConnectAddCategory />
            </Route>
            <Route path="/categories">
              <ConnectCategoryList />
            </Route>
            <Route path="/">
              <Redirect to="/categories" />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
