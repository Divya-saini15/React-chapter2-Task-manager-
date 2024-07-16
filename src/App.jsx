// App.js
import "./App.css";
import { useState } from "react";

import Ticket from "../src/Components/Ticket/Ticket";

function App() {
  <h1>Task Manager By Divya Saini</h1>;
  const tickets = [
    {
      title: "NGA School Website",
      description: {
        startDate: "11/July",
        dueDate: "20/July",
        costSpent: 2000000,
      },
      assignees: ["Person1", "Person2", "Person3"],
      tData:
        "Create a school website for NGA school with lots of functionality.",
      remainingdays: 5,
    },
    {
      title: "Library System",
      description: {
        startDate: "15/July",
        dueDate: "30/July",
        costSpent: 1500000,
      },
      assignees: ["Person4", "Person5"],
      tData: "Develop a library management system for the school",
      remainingdays: 15,
    },
    {
      title: "Sports Event",
      description: {
        startDate: "1/August",
        dueDate: "10/August",
        costSpent: 500000,
      },
      assignees: ["Person6", "Person7"],
      tData: "Organize annual sports event for the school",
      remainingdays: 8,
    },
    {
      title: "Science Fair",
      description: {
        startDate: "5/September",
        dueDate: "15/September",
        costSpent: 750000,
      },
      assignees: ["Person8", "Person9", "Person10"],
      tData:
        "Plan and execute the annual science fair for middle and high school students",
      remainingdays: 12,
    },
    {
      title: "Teacher Training Workshop",
      description: {
        startDate: "20/August",
        dueDate: "25/August",
        costSpent: 300000,
      },
      assignees: ["Person11", "Person12"],
      tData:
        "Organize a professional development workshop for teachers on new educational technologies",
      remainingdays: 3,
    },
    {
      title: "Cafeteria Renovation",
      description: {
        startDate: "1/July",
        dueDate: "15/August",
        costSpent: 5000000,
      },
      assignees: ["Person13", "Person14", "Person15"],
      tData:
        "Renovate and modernize the school cafeteria to improve dining experience",
      remainingdays: 20,
    },
    {
      title: "Parent-Teacher Conference",
      description: {
        startDate: "10/October",
        dueDate: "12/October",
        costSpent: 100000,
      },
      assignees: ["Person16", "Person17"],
      tData:
        "Organize and conduct parent-teacher conferences for all grade levels",
      remainingdays: 7,
    },
    {
      title: "Curriculum Update",
      description: {
        startDate: "1/June",
        dueDate: "31/July",
        costSpent: 250000,
      },
      assignees: ["Person18", "Person19", "Person20"],
      tData: "Review and update the curriculum for the upcoming academic year",
      remainingdays: 18,
    },
    {
      title: "School Play Production",
      description: {
        startDate: "1/September",
        dueDate: "30/November",
        costSpent: 400000,
      },
      assignees: ["Person21", "Person22"],
      tData:
        "Produce and direct the annual school play, including auditions, rehearsals, and performances",
      remainingdays: 25,
    },
    {
      title: "IT Infrastructure Upgrade",
      description: {
        startDate: "15/July",
        dueDate: "15/August",
        costSpent: 3000000,
      },
      assignees: ["Person23", "Person24", "Person25"],
      tData:
        "Upgrade the school's IT infrastructure, including network, servers, and computer labs",
      remainingdays: 10,
    },
  ];
  const [starredCount, setStarredCount] = useState(0); //counter of stared tickets
  const handleStarToggle = (isStarred) => {
    setStarredCount((prevCount) => (isStarred ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className="app">
      <h1 className="mainheading">Ticket Manager</h1>
      <div className="starred-count">Starred Tickets: {starredCount}</div>
      <div className="tickets-container">
        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            title={ticket.title}
            description={ticket.description}
            assignees={ticket.assignees.join(", ")}
            tData={ticket.tData}
            remainingdays={ticket.remainingdays}
            onStarToggle={handleStarToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
