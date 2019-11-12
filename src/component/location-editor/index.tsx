import React from "react";
import { Grid, TextField, Button, MenuItem } from "@material-ui/core";

export interface ILocationEditorProps {
  name: {
    value: string,
    onChange: (name: string) => void,
  },
  categoryList: {
    data: Array<{ name: string, id: string }>,
    selectedCategoryId: string | undefined,
    onChange: (categoryId: string) => void,
  },
  onSave: () => void
}

export const LocationEditor: React.FC<ILocationEditorProps> = ({
  name,
  categoryList,
  onSave,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={8} md={4} lg={3} xl={2}>
        <TextField
          value={name.value}
          onChange={(e) => name.onChange(e.target.value)}
          label="Location Name"
          fullWidth
          variant="outlined"
          margin="dense"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={4} lg={3} xl={2}>
        <TextField
          value={categoryList.selectedCategoryId || ''}
          onChange={(e) => categoryList.onChange(e.target.value)}
          label="Location Name"
          fullWidth
          variant="outlined"
          margin="dense"
          select
        >
          {
            categoryList.data.map(
              category => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </MenuItem>
              )
            )
          }
        </TextField>
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