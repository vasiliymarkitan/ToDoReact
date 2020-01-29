import React from "react";

export default function Tab(props) {
  const { value, text, isActive, handleChangeTab } = props;

  return (
    <div
      className={`tabs__item ${isActive ? "tabs__item_active" : ""}`}
      onClick={() => {
        handleChangeTab(value);
      }}
    >
      {text}
    </div>
  );
}
