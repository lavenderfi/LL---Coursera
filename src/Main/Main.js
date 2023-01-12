import { useState} from 'react';
import { fetchAPI } from '../temp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Booking } from '../Booking/BookingPage';

function Main() {

  function updateTimes(date){
    let times =  fetchAPI(date)
    console.log(times)
    return times
  }
 function initializeTimes(){
    let date = new Date()
    let times =  fetchAPI(date)
    console.log(times)
    return times
}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reserve" element={<Booking times={times} updateTimes={updateTimes} initializeTimes={initializeTimes}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
