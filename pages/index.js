import { fetchMovies, getCategory } from '../actions';

import Sidemenu from '../components/Sidemenu';
import Carousel from '../components/ Carousel';
import MovieList from '../components/MovieList';

const movies = fetchMovies();

const Home = ({ movies, movieImages, category }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>
          <Sidemenu items={category} />
        </div>

        <div className='col-lg-9'>
          <Carousel images={movieImages} />

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
  const movieImages = movies.map((movie) => {
    return {
      id: movie.id,
      url: movie.image,
      alt: movie.name,
    };
  });

  const category = await getCategory();

  return { movies, movieImages, category };
};

export default Home;
