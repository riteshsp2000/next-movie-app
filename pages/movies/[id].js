import { useRouter } from 'next/router';

import { getMovieById } from '../../actions/index';

const Movie = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='jumbotron'>
      <h1 className='display-4'>{movie.name}</h1>
      <p className='lead'>{movie.genre}</p>
      <hr className='my-4' />
      <p>{movie.description}</p>
      <p className='lead'>
        <a className='btn btn-primary btn-lg' href='#' role='button'>
          Learn more
        </a>
      </p>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);

  return { movie };
};

export default Movie;
