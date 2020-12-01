import './contenu.css';
import { Card } from '../card/Card';
import Gucci from '../../assets/gucci.png';
import Coca from '../../assets/coca.png';
import Lv from '../../assets/lv.png';
import Hermes from '../../assets/hermes.png';
import Disney from '../../assets/disney.png';
import Image from '../../assets/image.png';
import Nike from '../../assets/nike.png';
import Mercedes from '../../assets/mercedes.png';

export const Contenu = () => {
  return (
    <main>
      <div className='contain-card'>
        <Card image={Gucci} />
        <Card image={Coca} />
        <Card image={Lv} />
        <Card image={Hermes} />
        <Card image={Disney} />
        <Card image={Mercedes} />
        <Card image={Nike} />
        <Card image={Disney} />
        <Card image={Disney} />
        <Card image={Disney} />
        <Card image={Disney} />
        <Card image={Disney} />
        <Card image={Disney} />
        <Card image={Disney} />
      </div>
      <div className='business'>
        <div className='left'>
          <img src={Image} alt='Image' />
        </div>
        <div className='right'>
          <h5 className='category'>Grow and get paid</h5>
          <h2 className='title'>Got Deals? Get paid!</h2>
          <p className='para'>
            Join our Pays-2Share program, upload offers and earn 2% of the sales
            from your coupons.
          </p>
          <p className='para'>
            We've already paid over $1.300.000 to our members - join up!
          </p>
          <button>Learn More and Join Free</button>
        </div>
      </div>
    </main>
  );
};
