import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentsList from './components/student';
import FavoriteStudents from './Favoritestudents';
import './index.css'

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{display:'flex'}}>
            <li><Link to="/">List of Students</Link></li>
            <li><Link to="/favorites">Favorite Students</Link></li>
          </ul>
        </nav>

        {/* Update routing structure */}
        <Routes>
          <Route path="/" element={<StudentsList addToFavorites={addToFavorites} favorites={favorites} />} />
          <Route path="/favorites" element={<FavoriteStudents favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
