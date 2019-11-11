import React from "react";
import { TabBar, ETabBarTab } from ".";
import { useLocation, useHistory } from "react-router";

export const ConnectTabBar: React.FC = () => {
  let selectedTab: ETabBarTab;

  const location = useLocation();
  if (location.pathname.startsWith('/locations')) {
    selectedTab = ETabBarTab.locations;
  } else {
    selectedTab = ETabBarTab.categories;
  }

  const history = useHistory();
  return (
    <TabBar
      selectedTab={selectedTab}
      onSelectedTabChange={(nextTab) => {
        if (nextTab === selectedTab) {
          return;
        }

        if (nextTab === ETabBarTab.categories) {
          history.push('/categories');
        } else {
          history.push('/locations');
        }
      }}
    />
  )
};
