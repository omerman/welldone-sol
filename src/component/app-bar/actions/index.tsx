import React from "react";
import { ConnectCategoryListActions } from "./category-list-actions/connect";
import { ConnectLocationListActions } from "./location-list-actions/connect";

export interface IAppBarActionsProps {
  type: 'categories' | 'locations',
}

export const AppBarActions: React.FC<IAppBarActionsProps> = ({
  type
}) => {
  switch(type) {
    case 'locations':
      return <ConnectLocationListActions />;
    case 'categories':
      return <ConnectCategoryListActions />;
  }
};
