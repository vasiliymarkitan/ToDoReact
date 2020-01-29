import React from "react";
import "./Tabs.css";
import Tab from "./Tab";

export default function Tabs(props) {
  const tabsData = [
    { value: "all", text: "Все" },
    { value: "undone", text: "Незавершенные" },
    { value: "done", text: "Завершенные" }
  ];

  const tabs = tabsData.map(tab => {
    const isActive = props.activeTab === tab.value;

    return (
      <Tab
        key={tab.value}
        value={tab.value}
        text={tab.text}
        isActive={isActive}
        handleChangeTab={props.handleChangeTab}
      />
    );
  });

  return <div className="tabs">{tabs}</div>;
}
