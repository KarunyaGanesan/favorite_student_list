import React from 'react';

const FavoriteStudents = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favorite Students</h2>
      {favorites.length === 0 ? (
        <p>No favorite students yet.</p>
      ) : (
        <ul>
          {favorites.map((student) => (
            <li key={student}>
              {student}
              <button
                onClick={() => removeFromFavorites(student)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteStudents;
