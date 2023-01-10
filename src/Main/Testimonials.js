import stock from '../assets/stock.jpg';

export const Testimonials = () => {
  return (
    <div>
      <h1>Testimonials</h1>
      <div className="reviews">
        <ul>
          <li>
            <div className="heading">
              <img src={stock} alt="stock profile" />
              Bob
            </div>
            <p>⭐ ⭐ ⭐ ⭐ ⭐ </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <div className="heading">
              <img src={stock} alt="stock profile" />
              Maria
            </div>
            <p>⭐ ⭐ ⭐ ⭐ </p>
            <p>
             A lacus vestibulum sed arcu non odio.
            </p>
          </li>
          <li>
            <div className="heading">
              <img src={stock} alt="stock profile" />
              Juno
            </div>
            <p>⭐ ⭐ ⭐ ⭐ </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A
              lacus vestibulum sed arcu non odio.
            </p>
          </li>
          <li>
            <div className="heading">
              <img src={stock} alt="stock profile" />
              Fran
            </div>
            <p>⭐ ⭐ ⭐ ⭐ ⭐ </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
