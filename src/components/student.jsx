import React from 'react';

const StudentsList = ({ addToFavorites, favorites }) => {
  const students = ['Aarav', 'Priya', 'Rahul', 'Sneha', 'Dev', 'Arjun', 'Ananya', 'Meera', 'Rohan', 'Luna'];

  return (
    <div>
      <h2>List of Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student}>
            {student}
            <button
              onClick={() => addToFavorites(student)}
              disabled={favorites.includes(student)}
              style={{ marginLeft: '10px' }}
            >
              {favorites.includes(student) ? 'Added to Favorites' : 'Add to Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
