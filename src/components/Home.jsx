import React from 'react';
import StudentList from './studentlist';
import useFetch from './Usefetch';

const Home = () => {
    const { data: students } = useFetch('http://localhost:4000/students');

    return (
        <>
            {students && <StudentList students={students} />}
        </>
    );
}

export default Home;