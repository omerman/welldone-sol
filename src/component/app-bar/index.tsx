import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";

export const AppBar: React.FC = () => {
  return (
    <MuiAppBar>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">
              AppBar
          </Typography>
        </Box>
        <Button color="inherit">Create Category</Button>
      </Toolbar>
    </MuiAppBar>
  )
};