import React,{useState} from 'react';
import { Card, Col,Button ,Modal} from "react-bootstrap";
import EditContacts from './EditContacts';

const Contact = (props) => {
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleDelete =(e) => {
    e.preventDefault();
    props.deleteUser(props.userData.id)
}
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>< EditContacts userData={props.userData} editContacts ={props.editContacts} closeModal ={handleClose} /> </Modal.Body>
       
      </Modal>
     
        
             <Col md="4" style={{marginTop: "3rem"}}>
             <Card style={{ width: '14rem' }}>
      <Card.Body>
        <Card.Title>Contacts Book</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">List of Contacts</Card.Subtitle>
        <Card.Text>
        <p>
                name: {props.userData.name}
            </p>
            <p>
                number: {props.userData.number}
            </p>
            <p>
                location: {props.userData.location}
            </p>
          
        </Card.Text>
       
        <Button variant="success" size="sm" onClick={handleShow}>Edit</Button>
        <Button variant="danger" size="sm" style={{marginLeft: "20px"}} onClick={handleDelete}> Delete </Button>
      </Card.Body>
    </Card>
    </Col>
    </>
    );
}

export default Contact;
