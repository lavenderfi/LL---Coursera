import salad from '../assets/greeksalad.jpg';
import dessert from '../assets/lemondessert.jpg'
export const Specials = () => {
  return (
    <div className="specials">
      <div className="heading">
        <h1>Specials</h1>
        <a className="button" href="/menu">
          Menu
        </a>
      </div>
      <div className="specialfood">
        <ul>
          <li>
            <img src={salad} alt="greek salad" />
            <div className="heading">
              Salad <p>$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit amet aliquam id. Integer feugiat
              scelerisque varius morbi enim.
            </p>
            <a className='button' role='button' href='/order'>Order</a>
          </li>
          <li>
            <img src={dessert} alt="lemon dessert" />
            <div className="heading">
              Lemon Tart <p>$6.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit amet aliquam id. Integer feugiat
              scelerisque varius morbi enim.
            </p>
            <a className='button' role='button' href='/order'>Order</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
