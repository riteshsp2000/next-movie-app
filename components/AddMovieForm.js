import { useState } from 'react';

const AddMovieForm = () => {
  const [form, setForm] = useState({
    name: 'Lord of the Rings',
    description: 'A really great movie',
    rating: 4.9,
    image: 'adsfjl',
    cover: 'asdfljkd',
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          onChange={handleChange}
          value={form.name}
          type='text'
          className='form-control'
          id='name'
          aria-describedby='emailHelp'
          placeholder='Lord of the Rings'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <input
          name='description'
          onChange={handleChange}
          value={form.description}
          type='text'
          className='form-control'
          id='description'
          placeholder='Somewhere in Middle-earth...'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Rating</label>
        <input
          name='rating'
          onChange={handleChange}
          value={form.rating}
          type='number'
          max='5'
          min='0'
          className='form-control'
          id='rating'
          placeholder='3'
        />
        <small id='emailHelp' className='form-text text-muted'>
          Max: 5, Min: 0{' '}
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='image'>Image</label>
        <input
          name='image'
          onChange={handleChange}
          value={form.image}
          type='text'
          className='form-control'
          id='image'
          placeholder='http://.....'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='cover'>Cover</label>
        <input
          name='cover'
          onChange={handleChange}
          value={form.cover}
          type='text'
          className='form-control'
          id='cover'
          placeholder='http://......'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='longDesc'>Long Description</label>
        <textarea className='form-control' id='longDesc' rows='3'></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='genre'>Genre</label>
        <select
          multiple
          className='form-control'
          id='genre'
          onChange={handleGenreChange}
          // value={form.genre}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  );
};

export default AddMovieForm;
