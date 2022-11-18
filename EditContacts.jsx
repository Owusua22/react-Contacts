import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap"

class EditContacts extends Component {
   
    constructor(props){
        super(props)
        this.state= {
            name: props.userData.name,
            number: props.userData.number,
            location: props.userData.location,
            id: props.userData.id,
        }
    }
    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
        [e.target.name] : e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editContacts(this.state.id, this.state)
       this.setState({
        name:"",
        number:"",
        location:"",
       })
       this.props.closeModal() 
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter name" name ="name"value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Number</Form.Label>
              <Form.Control type="text" placeholder="Enter number" name ="number" value={this.state.number} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGen">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" name ="location"value={this.state.location}onChange={this.handleChange} />
            </Form.Group>
           
        
            <Button variant="primary" type="submit">
        Submit
      </Button>
           
            </Form>
            </div>
        );
    }
}
    

export default EditContacts;
