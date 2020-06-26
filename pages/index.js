import { useState, useEffect } from 'react';

import { fetchMovies } from '../actions';

import Sidemenu from '../components/Sidemenu';
import Carousel from '../components/ Carousel';
import MovieList from '../components/MovieList';

const movies = fetchMovies();

export default function Home() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMoviesApi = async () => {
  //     setMovies(await fetchMovies());
  //   };

  //   fetchMoviesApi();
  // }, []);

  const getInitialprops = async () => {
    setMovies(await fetchMovies());
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>
          <Sidemenu />
        </div>

        <div className='col-lg-9'>
          <Carousel />

          <div className='row'>
            {movies.length === 0 ? (
              <MovieList movies={movies} />
            ) : (
              <div> Loading.... </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
