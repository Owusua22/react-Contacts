import React, { Component } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/Contacts';
import AddContacts from "./Components/AddContacts"
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[
        {
          name: "Yaa Yeboah",
          number: "0544111246",
          location: "Accra",
          id: uuidv4(),
        },
        {
          name: "Abimael Kofi",
          number: "0544333222",
          location: "Lapaz",
          id: uuidv4(),
        },
        {
          name: "Uriel Opata",
          number: "0203454455",
          location: "Madina",
          id: uuidv4(),
        },
       
      ]
    }
      }
      addNewContact = (user) => {
        user.id= uuidv4()
        this.setState({
          users:[...this.state.users, user ]
        })
      }
      deleteUser =(id) =>{
        let availableUser = this.state.users.filter(user => user.id !== id)
        this.setState({
          users: availableUser,
        })
    
      } 
      editContacts = (id, updatedUser)=> {
    this.setState({
    users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
      }
  render() {
    return (
      <div>
        <Container fluid style={{marginTop:"3rem"}}>
        <Row>
          <Col md ="4">
            <AddContacts addContact={this.addNewContact} />
          </Col>
          <Col>
          <Contacts usersInfo={this.state.users} deleteUser ={this.deleteUser} editContacts ={this.editContacts} />
          </Col>
        </Row>
      </Container>
        
      </div>
    );
  }
}

export default App;
