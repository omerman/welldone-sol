import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

export interface ICategoryEditorProps {
  name: {
    value: string,
    onChange: (name: string) => void,
  }
  onSave: () => void
}

export const CategoryEditor: React.FC<ICategoryEditorProps> = ({
  name,
  onSave,
}: ICategoryEditorProps) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={8} md={4} lg={3} xl={2}>
        <TextField
          value={name.value}
          onChange={(e) => name.onChange(e.target.value)}
          label="Category Name"
          fullWidth
          variant="outlined"
          margin="dense"
        />
      </Grid>
      <Grid item container alignContent="center" xs={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={onSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}