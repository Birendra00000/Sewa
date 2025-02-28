"use client";

import React from "react";

const EventStatus = ({ date }) => {
  const today = new Date();
  const dueDate = new Date(date);

  let EventStatus = "";
  let statusColor = "";

  if (dueDate.toDateString() === today.toDateString()) {
    EventStatus = "In Progress";
    statusColor += "text-blue-500";
  } else if (dueDate < today) {
    EventStatus = "Completed"; // Overdue todo
    statusColor += "text-green-500";
  } else {
    EventStatus = "Not Started"; // Future todo
    statusColor += "text-red-500";
  }

  return <div className={statusColor}>{EventStatus}</div>;
};

export default EventStatus;
