import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from '../SearchBox'
import { logout } from '../../actions/userActions'


const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar variant='dark' expand="lg" collapseOnSelect style={{backgroundColor: '#01BF71'}}>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>PawPals</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({ history }) => <SearchBox history={history}/>} />
                        <Nav className="ml-auto">
                            {userInfo ? (
                                <NavDropdown title={userInfo.user.userName} id='userName' active style={{fontSize: "17px"}}>
                                    <LinkContainer to='/myprofile'>
                                        <NavDropdown.Item >Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ): <><LinkContainer to = '/login'>
                            <Nav.Link active><h6>Sign In</h6> </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to = '/register'>
                        <Nav.Link active><h6>Register</h6> </Nav.Link>
                    </LinkContainer> </>}
    
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}

export default Header

