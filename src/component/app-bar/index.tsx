import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { ConnectCategoryListActions } from "./category-list-actions/connect";

export const AppBar: React.FC = () => {
  return (
    <MuiAppBar>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">
              AppBar
          </Typography>
        </Box>
        <ConnectCategoryListActions />
      </Toolbar>
    </MuiAppBar>
  )
};