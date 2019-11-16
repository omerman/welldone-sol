import React from 'react';
import LocationsIcon from '@material-ui/icons/LocationOn';
import SvgIcon from '@material-ui/icons/LocationOn';

export const MapMarker: React.FC<{lat: number, lng: number}> = () => {
  return <SvgIcon style={{ color: 'yellow' }} ><LocationsIcon /></SvgIcon>
};
