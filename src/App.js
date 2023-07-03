import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=cd813593'

const App = () => {
  
  const [ movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('')
  }, []);

  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0  
        ? (
          <div className="container">
           {movies.map((movie, index) => (
             <MovieCard movie={movie} key={index}/>
           ))}
          </div>
        ) : ( 
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;

// to create this project, I used the youtube tutorial at
// https://www.youtube.com/watch?v=b9eMGE7QtTk&t=3051s
// titled: React JS Full Course 2022 | Build an App and Master React in 1 Hour
// use in js code terminal 
// npx create-react-app ./
// then delete unnecessary files and use 
// npm start
// needed to copy the App.css and search.svg files from the 
// github jist file in the comments of the video
// additional resource: https://omdbapi.com/apikey 
// for movie listings and backend data

