import { fetchAPI } from '../temp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Booking } from '../Booking/BookingPage';
import { Confirm } from '../Booking/Confirm';

function Main() {

  function updateTimes(date){
    let times =  fetchAPI(date)
    return times
  }
 function initializeTimes(){
    let date = new Date()
    let times =  fetchAPI(date)
    return times
}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/reserve" element={<Booking updateTimes={updateTimes} initializeTimes={initializeTimes}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
