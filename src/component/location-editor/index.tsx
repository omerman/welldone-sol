import React from "react";
import GoogleMapReact from 'google-map-react';
import { Grid, TextField, Button, MenuItem } from "@material-ui/core";
import { MapMarker } from "./map/marker";
import { PlaceAutoComplete } from "./place/autocomplete";

export interface ILocationEditorProps {
  place: {
    name: string,
    onChange: (
      name: string,
      placeId: string,
    ) => void,
    onClear: () => void,
    coordinates: { lat: number, lng: number } | undefined
  },
  categoryList: {
    data: Array<{ name: string, id: string }>,
    selectedCategoryId: string | undefined,
    onChange: (categoryId: string) => void,
  },
  onSave: () => void
}

export const LocationEditor: React.FC<ILocationEditorProps> = ({
  place,
  categoryList,
  onSave,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <PlaceAutoComplete
          value={place.name}
          onChange={place.onChange}
          onClear={place.onClear}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <TextField
          value={categoryList.selectedCategoryId || ''}
          onChange={(e) => categoryList.onChange(e.target.value)}
          label="Location Category"
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
      <Grid item xs={12} lg={6} xl={8} style={{ height: 500 }}>
        <GoogleMapReact
          center={{
            lat: place.coordinates ? place.coordinates.lat : 50,
            lng: place.coordinates ? place.coordinates.lng : 30,
          }}
          defaultZoom={15}
        >
          {place.coordinates ? <MapMarker {...place.coordinates} /> : null}
        </GoogleMapReact>
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