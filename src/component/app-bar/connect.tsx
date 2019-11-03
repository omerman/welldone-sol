import React from "react";
import { useLocation } from "react-router";
import { AppBar } from ".";

export const ConnectAppBar: React.FC = () => {
  const location = useLocation();

  let title = '';

  if (location.pathname === '/categories') {
    title = 'Categories';
  } else if (location.pathname === '/categories/create') {
    title = 'Add Category';
  } else if (location.pathname.startsWith('/categories/edit/')) {
    title = 'Edit Category'
  }

  return <AppBar title={title} />;
}