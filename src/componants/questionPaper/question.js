import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default function Question() {
  let [questionList, setQuestionList] = useState([]);
  let [questionOption, setQuestionOption] = useState([{}]);
  let [questionDescription, setQuestionDescription] = useState();

  let [show, setShow] = useState(false);
  let addOption = () => {
    setQuestionOption([...questionOption, {}])
  }
  let createQuestion = () => {
    setShow(true)
  }
  let handleClose = () => {
    setQuestionOption([{}])
    setShow(false)
  }
  let saveQuestion = () => {

    let temp = { "description": questionDescription, "option": questionOption }
    setQuestionList([...questionList, temp])
    setQuestionOption([{}])
    setQuestionDescription("")

    handleClose()
  }
  let handelchange = (e, type) => {
    if (type == "description") {
      setQuestionDescription(e.target.value)
    }
    else {
      let t = questionOption;
      t[type] = { [type + 1]: e.target.value };
      setQuestionOption(t);
    }
  }
  return (
    <div>
      <Button variant="primary" onClick={() => { createQuestion() }}>add Question</Button>
      {questionList.length > 0 ? questionList.map((value, index) => {
        return (<div key={index}>{value.description}<div>{value.option.map((op, i) => { return (<div>{Object.keys(op)[0]}:{op[Object.keys(op)[0]]}</div>) })}</div></div>)
      }) : null}
       {questionList.length?<Button variant="primary">download</Button>:null}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>question details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question description</Form.Label>

              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => { handelchange(e, "description") }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {questionOption.map((value, index) => {
                return (
                  <div key={index}> <Form.Label>Question options({index + 1})</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="option"
                      onChange={(e) => { handelchange(e, index) }}
                      autoFocus
                    /></div>
                )
              })}

            </Form.Group>
            <Button onClick={addOption}>add option</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveQuestion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
