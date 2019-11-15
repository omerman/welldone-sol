import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toolbar } from '@material-ui/core';
import { StoreProvider } from '../common/provider/store';
import { ThemeProvider } from '../common/provider/theme';
import { ConnectAppBar } from '../app-bar/connect';
import { ConnectCategoryList } from '../category-list/connect';
import { ConnectEditCategory } from '../category-editor/edit/connect';
import { ConnectAddCategory } from '../category-editor/add/connect';
import { ConnectLocationList } from '../location-list/connect';
import { ConnectEditLocation } from '../location-editor/edit/connect';
import { ConnectAddLocation } from '../location-editor/add/connect';
import { ConnectTabBar } from '../tab-bar/connect';
import { StyledAppContentWrap } from './styled/content-wrap';
import { StyledRouteWrap } from './styled/route-wrap';
import { StyledTabBarWrap } from './styled/tab-bar-wrap';

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
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
                <Route path="/locations/edit/:locationId">
                  <ConnectEditLocation />
                </Route>
                <Route path="/locations/create">
                  <ConnectAddLocation />
                </Route>
                <Route path="/locations">
                  <ConnectLocationList />
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
      </ThemeProvider>
    </StoreProvider>
  );
}
