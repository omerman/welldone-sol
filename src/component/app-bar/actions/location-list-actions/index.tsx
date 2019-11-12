import React from "react";
import { Button } from "@material-ui/core";

export interface ILocationListActionsProps {
  onCreateLocation: () => void,
  onEditLocation: () => void,
  onDeleteLocation: () => void,
  onViewLocation: () => void,
  selectedLocationId?: string,
}

export const LocationListActions: React.FC<ILocationListActionsProps> = ({
  onCreateLocation,
  onEditLocation,
  onDeleteLocation,
  onViewLocation,
  selectedLocationId,
}) => {
  if (!selectedLocationId) {
    return <Button color="inherit" onClick={onCreateLocation}>Create Location</Button>;
  } else {
    return (
      <React.Fragment>
        <Button color="inherit" onClick={onEditLocation}>Edit Location</Button>
        <Button color="inherit" onClick={onViewLocation}>View Location</Button>
        <Button color="inherit" onClick={onDeleteLocation}>Delete Location</Button>
      </React.Fragment>
    );
  }
};
