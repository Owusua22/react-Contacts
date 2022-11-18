import React, { Component } from 'react';
import { Form,Button} from "react-bootstrap";

class AddContacts extends Component {
   
    constructor(props){
        super(props)
        this.state= {
            name:"",
            number:"",
            location:"",
            id:"",
        }
    }
    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
        [e.target.name] : e.target.value
        })
        
    }
    handleAddContact = (e) => {
        e.preventDefault()
        this.props.addContact(this.state)
        console.log("Contact Added:", this.state)
        
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleAddContact}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter name" name ="name" onChange={this.handleChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Number</Form.Label>
              <Form.Control type="text" placeholder="Enter number" name ="number" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGen">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Location" name ="location" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
        Submit
      </Button>
           
            </Form>
            </div>
        );
    }
}
    
export default AddContacts;
