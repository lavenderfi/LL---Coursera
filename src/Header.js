import Imagee from './assets/restaurant.jpg';

export const Header = () => {
    return (
        <div className="home">
        <div className="info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
          <a role='button' href='/reserve' className='button'>Reserve a table</a>
        </div>
        <div className='image'><img src={Imagee}alt='Restaurant'/> </div>
      </div>
    )
    }
    
