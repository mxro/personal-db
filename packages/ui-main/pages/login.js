import Login from "../components/Login";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function LoginPage() {
  return <><Container>
    <Row>
      <Col>
        <h1>Login</h1>
        <Login />
      </Col >
    </Row >
  </Container >
  </>;
};

export default LoginPage; 