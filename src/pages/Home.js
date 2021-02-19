import React, { useState } from 'react'
import data from '../data';
import List from '../components/List';

const Home = () => {
    const [student, setStudent] = useState(data);
    return (
        <>
            <h2>Attendance List for {student.length} students</h2>
            <List student={student} />
            <div id="list"></div>
            <button onClick={() => setStudent([])}>Clear list</button>
        </>
    )
}

export default Home
