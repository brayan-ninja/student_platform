import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Alert } from 'react-bootstrap'; 
import axios from 'axios';

const StudentList = ({ students }) => {
  
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertType, setAlertType] = React.useState(''); 

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/students/${id}`)
            .then(() => {
                setAlertMessage('Student deleted successfully.');
                setAlertType('success');
            })
            .catch((err) => {
                setAlertMessage('Error deleting student: ' + err.message);
                setAlertType('danger'); 
            });
    };

    return (
        <div>
            {alertMessage && <Alert variant={alertType}>{alertMessage}</Alert>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                                <Link to={`/student-details/${student.id}`}>
                                    <Button variant="info" className='small-button'>View Details</Button>
                                </Link>
                                <Button 
                                    onClick={() => handleDelete(student.id)} 
                                    variant="danger" 
                                    className="delete-btn small-button" 
                                    type="button">
                                    Delete Student
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default StudentList;
