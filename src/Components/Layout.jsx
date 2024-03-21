import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Layout({search, setSearch}){
    const [visible, setVisible] = useState(true);
    function handleChange(e){
        setSearch(e.target.value);
    }
    return(
        <>
        <div className="container">
            <header className="header" style={{padding:'20px 0', borderBottom: '1px solid #e5e5e5'}}>
                <Navbar expand="lg" >
                    <Container fluid style={{backgroundColor:'white'}}>
                        <Navbar.Brand href="#">LookHouse&Beauty</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            onChange={handleChange}
                            type="search"
                            placeholder="Поиск по товарам"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button as="input" type="button" value="Поиск" />
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="content">
                <Outlet/>
            </div>
        </div>
        </>
    )
}