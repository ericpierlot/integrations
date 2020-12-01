import './searchbar.css';

export const Searchbar = () => {
  return (
    <div className='contain-input'>
      <input type='search' name='search' placeholder='Ej. Bed bath & beyond' />{' '}
      <button>Search</button>{' '}
    </div>
  );
};
