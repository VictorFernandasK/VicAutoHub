import { useSelector, useDispatch } from "react-redux";
import { deleteBooking, updateBooking } from "../redux/bookingSlice";

function MyBookings() {
    const bookings = useSelector(
        state => state.bookings.list
    );

    const dispatch = useDispatch();

    function editBooking(booking) {
        const newDate = prompt("Enter new test drive date:",booking.date);

        if (newDate) {
            dispatch(updateBooking({
                ...booking,date: newDate
            }));

            alert("Booking updated successfully!");
        }
    }

    return (
        <div className="page">

            <h1>My Test Drive Booking</h1>

            {bookings.length === 0 ? (
                <p>No booking available.</p>
            
            ) : (
                <div className="booking-container">
                    {bookings.map(booking => (
                        <div className="booking-card" key={booking.id}>

                            <h3>{booking.car}</h3>

                            <p>Name: {booking.name}</p>
                            <p>Email: {booking.email}</p>
                            <p>Phone: {booking.phone}</p>
                            <p>Date: {booking.date}</p>
                            <p>Status: {booking.status}</p>

                            <button onClick={() => editBooking(booking)}>Edit</button>

                            <button onClick={() => dispatch(deleteBooking(booking.id))}>
                                Delete
                            </button>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default MyBookings;