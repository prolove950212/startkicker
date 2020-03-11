import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navig extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <Navbar bg="light" expand="lg">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavLink className="nav-link" to='/payment'>Payment</NavLink>
          <NavLink className="nav-link" to='/create'>Start a project</NavLink>
          <NavLink className="nav-link" to='/project'>see a project</NavLink>
          <Nav.Link href="#home">Explore</Nav.Link>
            
          </Nav>
          <Navbar.Brand href="#home" className="ml-auto mr-auto">Startkicker</Navbar.Brand>
          <Nav className="ml-auto">
          {/* <Form inline className="mr-sm-2">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          { this.props.isLogin ?  <><NavLink className="nav-link" to='/profile'>Profile</NavLink>
          <NavLink className="nav-link" to='/' onClick={this.props.handleLogout}>Logout</NavLink></> : <><NavLink className="nav-link" to='/login'>Login</NavLink>
          <NavLink className="nav-link" to='/signup'>Signup</NavLink></>}
          
         
          
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

export default Navig;