import React, { useState, useContext } from "react";

import QuoteList from "./QuoteList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from '../lib/userContext';

function Dashboard() {
  const [{ id },] = useContext(UserContext);
  return <Container>
    <Col>
      <Row>
        <QuoteList userId={id} ></QuoteList>
      </Row>
    </Col>
  </Container>
};

export default Dashboard;