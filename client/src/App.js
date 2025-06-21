import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/people')
      .then(res => setPeople(res.data))
      .catch(err => console.error(err));
  }, []);

  const addPerson = (person) => {
    axios.post('http://localhost:5000/api/people', person)
      .then(res => setPeople(prev => [...prev, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Person Details</h1>
      <PersonForm addPerson={addPerson} />
      <PersonList people={people} />
    </div>
  );
}

export default App;
