import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../temp';

export const Form = ({updateTimes, initializeTimes }) => {
  let [info, setInfo] = useState({
    date: '',
    time: '',
    size: 1,
    occasion: 'other',
  });

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());
let navigate = useNavigate()
  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    if ([e.target.name] === 'date') {

      dispatch(e.target.value);
      console.log(e.target.value)  
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(submitAPI(info)){
        navigate('/confirm')
    }
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          onChange={handleChange}
          value={info.date}
          name="date"
          // validation for date is the only one needed
          required

        />
        <label htmlFor="time">Time</label>
        <select onChange={handleChange} value={info.time} name="time">
          {
            state.map((time) => {
              return <option key={time}>{time}</option>;
            })}
        </select>
        <label htmlFor="partySize">Number of Guests</label>
        <input
          type="number"
          name="size"
          placeholder="1"
          min="1"
          max="10"
          onChange={handleChange}
          value={info.size}
        />
        <label htmlFor="occasion">Occasion</label>
        <select onChange={handleChange} value={info.occasion} name="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <input type="submit" value="Submit" className="button" aria-label='button' />
      </form>
    </div>
  );
};
