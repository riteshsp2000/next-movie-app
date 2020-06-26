import { fetchMovies } from '../actions';

import Sidemenu from '../components/Sidemenu';
import Carousel from '../components/ Carousel';
import MovieList from '../components/MovieList';

const movies = fetchMovies();

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>
          <Sidemenu />
        </div>

        <div className='col-lg-9'>
          <Carousel />

          <div className='row'>
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await fetchMovies();

  return { movies };
};

export default Home;
