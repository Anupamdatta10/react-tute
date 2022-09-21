import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default function Question() {
  let [questionList, setQuestionList] = useState([{}]);
  
  let [show, setShow] = useState(false);
  let createQuestion = () => {
    setShow(true)
  }
  let handleClose = () => {
    setShow(false)
  }
  return (
    <div>question
      <Button variant="primary" onClick={() => { createQuestion() }}>add Question</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>question details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {questionList.map((value,index)=>{
                return(
                  <>

                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question description</Form.Label>
             
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
               <Form.Label>Question options</Form.Label>
               <Form.Control
                type="email"
                placeholder="option"
                autoFocus
              />
              
            </Form.Group>
            <Button>add option</Button>
            </>
                )
              })}
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
