
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addBooking } from "../redux/bookingSlice";
import  cars  from "../data/cars";



const initialState = {
    name: "",
    email: "",
    phone: "",
    car: "",
    date: ""
};



function formReducer(state, action) {
    return {
        ...state, [action.name]: action.value
    };
}

function BookTestDrive() {
    const [form, dispatchForm] = useReducer(
        formReducer, initialState
    );

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const selectedCar = searchParams.get("car") || "";

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !form.name ||
            !form.email ||
            !form.phone ||
            !form.car ||
            !form.date
        ) {
            alert("Please fill all the fields");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            alert("Please enter a valid email");
        }

        if (!/^[0-9]{10}$/.test(form.phone)) {
            alert("Enter a valid 10 digit mobile Number");
            return;
        }

        const booking ={ 
            ...form, id: Date.now(), status: "Pending"
        };

        dispatch(addBooking(booking));

        alert("Test drive booked successfully!");

        Object.keys(initialState).forEach(key => {
            dispatchForm({
                name: key,
                value: ""
                });
        });
    }

    return (
        <div className="page form-page">
            <h1>Book Your Test Drive</h1>

            <form onSubmit={handleSubmit}>
                <label>Customer Name</label>
                <input
                 type="text"
                 placeholder="Enter Your Name"
                 value={form.name}
                 onChange={e => dispatchForm({
                    name: "name",
                    value: e.target.value
                 })} 
                />

                <label>Email Address</label>

                <input 
                 type="email"
                 placeholder="Enter Your Email"
                 value={form.email}
                 onChange={e => dispatchForm({
                    name: "email",
                    value: e.target.value
                 })}
                />

                <label>Mobile Number</label>

                <input
                 type="tel"
                 placeholder="Enter Your Mobile Number"
                 value={form.phone}
                 onChange={e => dispatchForm({
                    name: "phone",
                    value: e.target.value
                 })}
                />

                <label>Select Car</label>

                <select value={form.car || selectedCar}
                onChange={e => dispatchForm({
                    name: "car",
                    value: e.target.value
                })}
                >
                    <option value="">Select Car</option>
                    {cars.map(car => (
                        <option key={car.id} value={car.name}>
                            {car.name}
                        </option>
                    ))}

                </select>

                <label>Test Drive Date</label>

                <input
                 type="date"
                 min={new Date().toISOString().split("T")[0]}
                 value={form.date}
                 onChange={e => dispatchForm({
                    name: "date",
                    value: e.target. value
                 })} 
                />

                <button onClick={() => navigate("/book")}>Book Now</button>

            </form>

        </div>
    );
}

export default BookTestDrive;
