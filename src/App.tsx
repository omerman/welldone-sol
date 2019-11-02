import React from 'react';
import { AppBar } from './component/app-bar';
import { Toolbar } from '@material-ui/core';
import { StoreProvider } from './component/common/provider/store';
import { ConnectCategoryList } from './component/category-list/connect';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <AppBar />
        <Toolbar />
        <ConnectCategoryList />
      </div>
    </StoreProvider>
  );
}

export default App;
