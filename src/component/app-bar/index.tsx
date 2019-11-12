import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { ConnectAppBarActions } from "./actions/connect";

export interface IAppBarProps {
  title: string,
}

export const AppBar: React.FC<IAppBarProps> = ({
  title
}: IAppBarProps) => {
  return (
    <MuiAppBar>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">
              {title}
          </Typography>
        </Box>
        <ConnectAppBarActions />
      </Toolbar>
    </MuiAppBar>
  )
};