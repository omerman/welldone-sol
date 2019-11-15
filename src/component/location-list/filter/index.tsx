import React, { useState, useRef } from 'react';
import {
  IconButton, Menu, MenuItem, Checkbox, Typography,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

export interface ILocationListCategoryFilterProps {
  onToggleFilter: (id: string) => void,
  filters: { id: string, label: string, selected: boolean }[],
}

export const LocationListCategoryFilter: React.FC<ILocationListCategoryFilterProps> = ({
  filters,
  onToggleFilter,
}) => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        ref={buttonRef}
        aria-label="Filter list"
        onClick={() => setOpen(true)}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={() => setOpen(false)}
      >
        {
          filters.map(
            filter => (
              <MenuItem
                key={filter.id}
                onClick={() => onToggleFilter(filter.id)}
              >
                <Checkbox
                  indeterminate
                  checked={filter.selected}
                  value={filter.id}
                  color="primary"
                />
                <Typography>
                  {filter.label}
                </Typography>
              </MenuItem>
            ),
          )
        }
      </Menu>
    </div>
  );
};
