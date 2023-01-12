import { render, screen,fireEvent } from "@testing-library/react";
import {Form} from './Booking/BookingForm'

test('Renders the BookingForm heading', () => {
    render(<Form />);
    const headingElement = screen.getByText("Submit");
    expect(headingElement).toBeInTheDocument();
})

test('Testing some elements from the booking form, check if empty date doesnt submit', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
    
    
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });