import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LocationsIcon from '@material-ui/icons/LocationOn';
import CategoriesIcon from '@material-ui/icons/Class';
import React from "react";

export enum ETabBarTab {
  locations = 'locations',
  categories = 'categories',
}

export interface ITabBarProps {
  selectedTab: ETabBarTab,
  onSelectedTabChange: (tab: ETabBarTab) => void,
}

export const TabBar: React.FC<ITabBarProps> = ({
  selectedTab,
  onSelectedTabChange,
}: ITabBarProps) => {

  return (
    <BottomNavigation
      value={selectedTab}
      onChange={(event, newValue) => {
        onSelectedTabChange(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        value={ETabBarTab.categories}
        label="Categories"
        icon={<CategoriesIcon />}
      />
      <BottomNavigationAction
        value={ETabBarTab.locations}
        label="Locations"
        icon={<LocationsIcon />}
      />
    </BottomNavigation>
  )
};
