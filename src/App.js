import React, { useState } from 'react'
import data from './data';
import './App.css';
import List from './components/List';

function App() {
  const [student, setStudent] = useState(data);
  return (
   <main>
     <section className="container">
        <h2>Attendance List for {student.length} students</h2>
        <List student={student}/>
        <div id="list"></div>
        <button onClick = {() => setStudent([])}>Clear list</button>
     </section>
   </main>
  );
}

export default App;
