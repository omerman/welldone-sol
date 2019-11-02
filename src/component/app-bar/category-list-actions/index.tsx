import React from "react";
import { Button } from "@material-ui/core";

export interface ICategoryListActionsProps {
  onCreateCategory: () => void,
  onEditCategory: () => void,
  onDeleteCategory: () => void,
  onViewCategory: () => void,
  selectedCategoryId?: string,
}

export const CategoryListActions: React.FC<ICategoryListActionsProps> = ({
  onCreateCategory,
  onEditCategory,
  onDeleteCategory,
  onViewCategory,
  selectedCategoryId,
}) => {
  if (!selectedCategoryId) {
    return <Button color="inherit" onClick={onCreateCategory}>Create Category</Button>;
  } else {
    return (
      <React.Fragment>
        <Button color="inherit" onClick={onEditCategory}>Edit Category</Button>
        <Button color="inherit" onClick={onViewCategory}>View Category</Button>
        <Button color="inherit" onClick={onDeleteCategory}>Delete Category</Button>
      </React.Fragment>
    );
  }
};
