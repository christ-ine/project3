import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "./style.css";

const Header = ({ currentUser }) => {
    return (
        <>
            <Navbar className="header__navbar" variant="dark">
                <Link to="/">

                <Navbar.Brand as='div' href="#home">PawPals</Navbar.Brand>
                </Link>
                <Nav as='div' className="mr-auto">
                    <Link to="/myprofile">
                        <Navbar.Text>My Profile</Navbar.Text>
                    
                    </Link>
                    
                </Nav>
                {currentUser ? (
                    <Button variant="dark">Logout</Button>
                ) :(
                <>
                <Link to="/login">
                    <Button variant="dark">Login</Button>
                    {" "}
                </Link>

                <Link to="/register">
                    <Button variant="dark">Register</Button>
                </Link>
                </>
                )}
            </Navbar>
        </>
    )
}

export default Header