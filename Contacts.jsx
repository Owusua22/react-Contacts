import React from 'react';
import { Container,Row} from "react-bootstrap";
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <div>
            <Container>
            <Row>
                {
                    props.usersInfo.map((user) =>{
                        return <Contact userData={user} key={user.id} deleteUser={props.deleteUser} editContacts = {props.editContacts} /> 
                    })
                }
            
            </Row>
        </Container>
            
        </div>
    );
}

export default Contacts;
