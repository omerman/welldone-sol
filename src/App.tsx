import React from 'react';
import { AppBar } from './component/app-bar';
import { CategoryList } from './component/category-list';
import { Toolbar } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Toolbar />
      <CategoryList list={[ { name: 'Category1' }, { name: 'Category2' } ]} />
    </div>
  );
}

export default App;
