import React from "react";
import { useLocation } from "react-router";
import { AppBarActions } from ".";

export const ConnectAppBarActions: React.FC = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/categories')) {
    return <AppBarActions  type="categories" />;
  } else {
    return <AppBarActions  type="locations" />;
  }
};
