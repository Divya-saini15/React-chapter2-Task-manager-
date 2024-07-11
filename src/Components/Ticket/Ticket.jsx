/* eslint-disable react/prop-types */
import './Ticket.css';

function Ticket({
  title,
  description,
  assignees,
  Reporter = "Divya Saini",
  tData = "No Data present",
  remainingdays,
}) {
  return (
    <div className="ticket">
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