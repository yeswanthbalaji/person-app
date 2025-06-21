import React from 'react';

function PersonList({ people }) {
  return (
    <ul>
      {people.map((person, i) => (
        <li key={i}>{person.name} - {person.email}</li>
      ))}
    </ul>
  );
}

export default PersonList;
