import Link from 'next/link';

import Modal from './Modal';
import AddMovieForm from './AddMovieForm';

const Sidemenu = ({ items }) => {
  return (
    <div>
      <Modal>
        <AddMovieForm />
      </Modal>
      <h1 className='my-4' id='categories-title'>
        Categories
      </h1>
      <div className='list-group'>
        {items.map((item) => {
          return (
            <Link href='#' key={item.id}>
              <a className='list-group-item'>{item.name}</a>
            </Link>
          );
        })}
      </div>

      <style>
        {`
        h1#categories-title.my-4{
          margin-top: 1rem !important;
        }
      `}
      </style>
    </div>
  );
};

export default Sidemenu;
