import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ options, isMainOptions }) => {
  return (
    <ListGroup variant="flush" style={styles.sidebar}>
      {options.map((option, index) => (
        <ListGroup.Item key={index} style={styles.sidebarItem}>
          {isMainOptions ? (
            <Link
              to={`/roadmap/${option.toLowerCase().replace(/\s+/g, "-")}`}
              style={styles.sidebarLink}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")} // Hover effect
              onMouseOut={(e) => (e.currentTarget.style.color = "")} // Reset color
            >
              {option}
            </Link>
          ) : (
            <span style={styles.sidebarText}>{option}</span>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const styles = {
  sidebar: {
    zIndex: 15000,
    width: "100%",
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sidebarItem: {
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
  },
  sidebarLink: {
    textDecoration: "none",
    color: "#333",
    display: "block",
    fontWeight: "bold",
  },
  sidebarText: {
    color: "#333",
  },
};

export default Sidebar;
