import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toolbar } from '@material-ui/core';
import { ConnectAppBar } from '../app-bar/connect';
import { StoreProvider } from '../common/provider/store';
import { ConnectCategoryList } from '../category-list/connect';
import { ConnectEditCategory } from '../category-editor/edit/connect';
import { ConnectAddCategory } from '../category-editor/add/connect';
import { ConnectTabBar } from '../tab-bar/connect';
import { StyledAppContentWrap } from './styled/content-wrap';
import { StyledRouteWrap } from './styled/route-wrap';
import { StyledTabBarWrap } from './styled/tab-bar-wrap';

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <StyledAppContentWrap>
          <ConnectAppBar />
          <Toolbar />
          <StyledRouteWrap>
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
          </StyledRouteWrap>
          <StyledTabBarWrap>
            <ConnectTabBar />
          </StyledTabBarWrap>
        </StyledAppContentWrap>
      </Router>
    </StoreProvider>
  );
}
