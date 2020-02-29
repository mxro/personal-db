import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import UserContext from '../lib/userContext';

function MyNavbar() {

  return <Navbar>
    <Link href="/index" passHref>
      <Navbar.Brand href="/">Quotes</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <UserContext.Consumer >
        {([userContext,]) => {
          if (userContext) {
            return <Navbar.Text>
              Signed in as: {userContext.username}
            </Navbar.Text>
          }

          return <Nav>
            <Link href="/login" passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        }}

      </UserContext.Consumer>
    </Navbar.Collapse>
  </Navbar>;
}

export default MyNavbar;