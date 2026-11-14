import { useParams, Link } from "react-router-dom";
import cars from "../data/cars";

function CarDetails() {
    const { id } = useParams();

    const car = cars.find(item => item.id === Number(id));
    
    if(!car) {
        return <h2 className="page">Car not found.</h2>
    }

    return (
        <div className="details page">
            <img src={car.image} alt={car.name} />

            <div>
                <h1>{car.name}</h1>

                <h2 className="price">
                    Rs.{car.price.toLocaleString("en-IN")}
                </h2>

                <p>Brand: {car.brand}</p>
                <p>Category: {car.category}</p>
                <p>Fuel Type: {car.fuel}</p>
                <p>Mileage: {car.mileage}</p>
                <p>Transmission: {car.year}</p>

                <Link to={`/book?car=${car.name}`}>
                  <button>Book Test Drive</button>
                </Link>
            </div>

        </div>
    );
}

export default CarDetails;