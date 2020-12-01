import './card.css';
export const Card = ({ image }) => {
  return (
    <div className='card'>
      <img src={image} alt='brand' />
    </div>
  );
};
