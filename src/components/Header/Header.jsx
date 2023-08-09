import "./header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';


const Header = () => {
  const links = [
    { id: "n1", name: "Home", link: "/", variant: "primary" },
    { id: "n2", name: "Cities", link: "/cities", variant: "secondary" },
    // { id: "n3", name: "Login", link: "#", variant: "secondary" }
  ];
  const Links = links.map(navLink => <Nav.Link className="nav-item" variant={navLink.variant} href={navLink.link} key={navLink.id}>{navLink.name}</Nav.Link>
  )
  return (
    <>
      <header className="headerMain bg-light ">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="/"><img className="logo" src="../public/logomytinerary.png" title=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="me-auto">
                {Links}
                <Dropdown>
                  <Dropdown.Toggle variant="" className=" borderTransparent" id="dropdown-basic">
                    <img className=" userProfile " src="../public/userProfile.png" title=""></img>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="nav-item borderTransparent" href="#/action-1">Sign In</Dropdown.Item>
                    <Dropdown.Item className="nav-item borderTransparent" href="#/action-2">Sign UP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
export default Header;