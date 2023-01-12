import { Form } from "./BookingForm"
export const Booking = ({times,updateTimes,initializeTimes}) => {
    return (
        <div className='reserve'>
            <h1> Book your reservation!</h1>
            <Form times={times} updateTimes={updateTimes} initializeTimes={initializeTimes} />
        </div>
    )
}