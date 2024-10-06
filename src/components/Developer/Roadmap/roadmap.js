import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Main from "./Main";

import mernImage from "../../../assests/roadmap/mern.jpg";
import blockchainImage from "../../../assests/roadmap/blockchain.png";
import dsaImage from "../../../assests/roadmap/dsa.png";
import nextImage from "../../../assests/roadmap/next.png";
import promptImage from "../../../assests/roadmap/prompt.png";
import fullstackImage from "../../../assests/roadmap/full.png";
import javaImage from "../../../assests/roadmap/java.jpg";
import pythonImage from "../../../assests/roadmap/python.jpg";
import javascriptImage from "../../../assests/roadmap/js.png";
import Layout from "../../Layout";

const Roadmap = () => {
  const mainOptions = [
    { name: "Mern FullStack", image: mernImage },
    { name: "Blockchain Development", image: blockchainImage },
    { name: "DSA", image: dsaImage },
    { name: "Next JS", image: nextImage },
    { name: "Prompt Engineer", image: promptImage },
    { name: "FullStack Development", image: fullstackImage },
    { name: "Java", image: javaImage },
    { name: "Python", image: pythonImage },
    { name: "JavaScript", image: javascriptImage },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout title="Roadmap - IIT Academy">
      <Container fluid className="app-container" style={styles.appContainer}>
        <Row className="justify-content-end mb-4">
          <Col xs={12} md={8} lg={12}>
            <SearchBar onSearch={setSearchQuery} />
          </Col>
        </Row>
        <Row className="main-page" style={styles.mainPage}>
          <Col xs={12} md={8} lg={12}>
            <Main options={mainOptions} searchQuery={searchQuery} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainPage: {
    backgroundColor: "#ffffff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Roadmap;
