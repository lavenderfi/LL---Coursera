import one from '../assets/restaurant chef B.jpg'
import two from '../assets/Mario and Adrian b.jpg'

export const About = () => {
  return (
    <div>
        <h1 className='abouttitle'>About Us</h1>
    <div className='about'> 
        <div className='title'>  
        <div className='heading'>  <h1>Little Lemon</h1>
      <h2>Chicago</h2></div>
      <p>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials.
      </p></div>
<div className='photos'>
    <img className='img1' src={one} alt='couple' />
    <img className='img2' src={two} alt='restaurant'/>
</div>
    </div></div>
  );
};
