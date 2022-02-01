import React from 'react';
import '../App.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  './todo.css'
class RandUserClass extends React.Component {
    constructor() {
        console.log("constructer");
        super();
        this.state = {
            task: [],
            loading: true,
            show:false,
            taskname:''
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.userdisplay();
    }

    userdisplay = async () => {
        console.log("button click");
        this.setState({ loading: true });
        var x = await axios.get('api/v1/to_do/')

        this.setState({
            task: x.data,
            loading: false
        });


    }
    updateTask = async (e) => {
        console.log("update", e);
        var x = await axios({
            method: 'put',
            url: 'api/v1/to_do/' + e.T_id,
            data: {
                Status: (e.Status == "Done") ? "To_do" : "Done"
            }
        });
        console.log(x);
        this.userdisplay();

    }
    deleteTask = async (e) => {
        console.log("delete");
        var x = await axios({
            method: 'delete',
            url: 'api/v1/to_do/' + e.T_id
        });
        console.log(x);
        this.userdisplay();
    }
    handleClose = () => {
        console.log("close",this.state.show)
        this.setState({ show:false})
    };
    handleShow = () => {
        console.log("modal show")
        this.setState({ show:true})
       
    };
    taskadd=async ()=>{
        console.log("add task");
        var x = await axios({
            method: 'post',
            url: 'api/v1/to_do/' ,
            data:{
                "T_Name": this.state.taskname,
                "user_id":"1",
                "Status":"To_do"
            }
        });
        console.log(x);
        this.handleClose();
        this.userdisplay()

    }
    taskinput =(e) =>{
        this.setState({taskname:e.target.value})
        console.log(this.state.taskname)
    }
    render() {
        return (<>
        <h1 className='primary'><u >TO-DO LIST</u></h1>
            <div className='container'>
                <button type="button" className="btn btn-primary btn-lg "  onClick={() => this.handleShow()}>ADD TASK</button>

                {(this.state.loading) ?
                    <img className="App-logo" src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png" /> :

                    this.state.task.map((task_details) => (

                        <div className=' p-3 border border-primary  my-2 rounded-3 shadow row' key={task_details.T_id}>
                            <span className='taskname col-4'>{task_details.T_Name}</span>
                            <span className='taskstatus col-4'>{task_details.Status}</span>
                            <div className='col-4 btn-toolbar'>
                                <button type='button' className='btn btn-success btn-outline-primary' onClick={() => this.updateTask(task_details)}>UPDATE</button>
                                <button type='button' className='btn btn-danger ' onClick={() => this.deleteTask(task_details)}>DELETE</button>
                            </div>

                        </div>
                    ))
                }
        
           <Modal show={this.state.show} onHide={()=>this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicTask">
    <Form.Label>Task Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Task" onKeyUp={(e)=>this.taskinput(e)} />
  </Form.Group>
  </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.taskadd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </>)
    }
}

export default RandUserClass;