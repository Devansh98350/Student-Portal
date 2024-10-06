import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Blockchain from "./fields/Blockchain";
import Dsa from "./fields/Dsa";
import Mern from "./fields/Mern";
import Next from "./fields/Next";
import Prompt from "./fields/Prompt";
import Fullstack from "./fields/Fullstack";
import Java from "./fields/Java";
import Python from "./fields/Python";
import Javascript from "./fields/Javascript";
import Layout from "../../Layout";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import mainOptions from "./mainOptions"; // Ensure you have this data available

const OptionPage = ({ options }) => {
  const { optionId } = useParams();
  const option = options.find(
    (opt) => opt.name.toLowerCase().replace(/\s+/g, "-") === optionId
  );
  const optionName = option ? option.name : "";

  const renderComponent = (optionName) => {
    switch (optionName) {
      case "Blockchain Development":
        return <Blockchain />;
      case "DSA":
        return <Dsa />;
      case "Mern FullStack":
        return <Mern />;
      case "Next JS":
        return <Next />;
      case "Prompt Engineer":
        return <Prompt />;
      case "FullStack Development":
        return <Fullstack />;
      case "Java":
        return <Java />;
      case "Python":
        return <Python />;
      case "JavaScript":
        return <Javascript />;
      default:
        return <div>Option not found</div>;
    }
  };

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      // minHeight: "100vh",
    },
    sidebar: {
      position: "sticky",
      top: "100px",
      left: 0,
      width: "20%",
      // height: "0vh",
      overflowY: "auto",
      backgroundColor: "#fff",
    },
    content: {
      marginLeft: "20%", // Shift content right to make space for the sidebar
      width: "80%",
      padding: "20px",
      overflowY: "auto", // Allows scrolling within content area
      minHeight: "100vh", // Ensure content area also takes full height
    },
    header: {
      textAlign: "center",
      color: "#007bff",
      margin: "20px 0",
    },
    contentCenter: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <Layout title={`Roadmap - ${optionName}`}>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Sidebar
            options={mainOptions.map((option) => option.name)}
            isMainOptions={true}
          />
        </div>
        <div style={styles.content}>
          <h2 style={styles.header}>{optionName}</h2>
          {option && (
            <div style={styles.contentCenter}>
              {renderComponent(option.name)}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OptionPage;
