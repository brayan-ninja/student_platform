import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

function Create (){
    const [ data, setData] = useState({
        name: "",
        gender:"",
        course:"",
        email: "",
        password: ""
        
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value
        }))
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/students', data)
          .then(res => {
            toast.success('New blog added successfully!', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
          })
          .catch(err => {
            toast.error('An error occurred while adding the blog', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            })
          })
      }
      return(
        <div>
            <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control  name="name" type="name" onChange={handleChange}  placeholder="Enter both names" />
             </Form.Group>
             <Form.Select aria-label="Gender Select">
             <Form.Label>Gender</Form.Label>
             <option value="" onChange={handleChange} >Choose Gender</option>  {/* Empty option for default selection */}
             <option value="1">Male</option>
             <option value="2">Female</option>
             <option value="3">Others</option>
             </Form.Select>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course</Form.Label>
              <Form.Control name="course" type="text" onChange={handleChange}  placeholder="enter current course" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control  name="email" type="text"  onChange={handleChange}  placeholder="name@example.com" />
             </Form.Group>
             <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange} 
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
             />
             <Form.Text id="passwordHelpBlock" muted>
               Your password must be 8-20 characters long, contain letters and numbers,
               and must not contain spaces, special characters, or emoji.
             </Form.Text>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Button variant="primary" type="submit">Login</Button>
        </Form.Group>
             <ToastContainer />
            </Form>
        </div>
      );
}

export default Create;