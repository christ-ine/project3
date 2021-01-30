import React from 'react'
// import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import SearchBox from './SearchBox'
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
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>PawPals</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Route render={({ history }) => <SearchBox history={history}/>} /> */}
                        <Nav className="ml-auto">
                            {userInfo ? (
                                <NavDropdown title={userInfo.user.userName} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ): <LinkContainer to = '/login'>
                            <Nav.Link>Sign In <i className='fas fa-user'></i></Nav.Link>
                        </LinkContainer>}
    
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}

export default Header

