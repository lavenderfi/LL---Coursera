import { render, screen } from "@testing-library/react";
import BookingForm from './Booking/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Submit");
    expect(headingElement).toBeInTheDocument();
})
