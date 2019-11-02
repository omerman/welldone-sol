import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { AppBar } from './component/app-bar';
import { Toolbar } from '@material-ui/core';
import { StoreProvider } from './component/common/provider/store';
import { ConnectCategoryList } from './component/category-list/connect';
import { ConnectCategoryEditor } from './component/category-editor/connect';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div>
          <AppBar />
          <Toolbar />
          <Switch>
            <Route path="/categories/:categoryId">
              <ConnectCategoryEditor />
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
