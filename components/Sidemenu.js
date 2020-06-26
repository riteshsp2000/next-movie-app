import Link from 'next/link';

const Sidemenu = ({ items }) => {
  return (
    <div>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
        {items.map((item) => {
          return (
            <Link href='#' key={item.id}>
              <a className='list-group-item'>{item.name}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
