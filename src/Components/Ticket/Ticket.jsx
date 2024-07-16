/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Ticket.css";

function Ticket({
  title,
  description,
  assignees,
  Reporter = "Divya Saini",
  tData = "No Data present",
  remainingdays,
  onStarToggle
}) {
  const [star, setStar] = useState(false);

  

  const toggleLike = () => {
    const newStarState = !star;
    setStar(newStarState);
    onStarToggle(newStarState);
  };

  console.log("Current star state:", star);

  return (
    <div className="ticket">
      <div onClick={toggleLike} className="star-icon">
        {star ? (
          <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <h2>{title}</h2>
      <p>{tData}</p>
      <p>Start Date: {description.startDate}</p>
      <p>Due Date: {description.dueDate}</p>
      <p>Cost Spent: ${description.costSpent.toLocaleString()}</p>
      {assignees && <p>Assignees: {assignees}</p>}
      {remainingdays < 10 && <p className="high-priority">High Priority</p>}
      <p className="reporter">Reporter: {Reporter}</p>
    </div>
  );
}

export default Ticket;
