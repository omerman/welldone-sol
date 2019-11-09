import React, { useState } from "react";
import { TabBar, ETabBarTab } from ".";

export const ConnectTabBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(ETabBarTab.categories);

  return (
    <TabBar
      selectedTab={selectedTab}
      onSelectedTabChange={setSelectedTab}
    />
  )
};
