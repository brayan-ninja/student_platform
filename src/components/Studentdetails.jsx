import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import useFetch from "./Usefetch";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: student, isLoading } = useFetch(`http://localhost:4000/students/${id}`);
  const [formData, setFormData] = useState({ name: '', email: '', gender: '', course: '', password: '' });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        gender: student.gender,
        course: student.course,
        password: student.password
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/students/${id}`,formData)
      .then(() => console.log('Student updated successfully.'))
      .catch((err) => console.error('Error updating student:', err));
  };

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Update Student:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      
      <div>
        <label>course</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} />
      </div>
      
      <div>
        
        <Form.Select aria-label="Gender Select">
             <Form.Label>Gender</Form.Label>
             <option value="" onChange={handleChange} >Choose Gender</option>  {/* Empty option for default selection */}
             <option value="1">Male</option>
             <option value="2">Female</option>
             <option value="3">Others</option>
             </Form.Select>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      <button type="submit">Edit</button>
    </form>
  );
}

export default StudentDetails;