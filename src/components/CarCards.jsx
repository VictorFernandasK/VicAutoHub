import { Link } from "react-router-dom";

function CarCard({ car }) {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} />

            <div className="car-info">
                <h3>{car.name}</h3>

                <p>{car.category} | {car.fuel}</p>

                <h3 className="price">Rs. {car.price.toLocaleString("en-In")}</h3>

                <Link to={`/cars/${car.id}`}>View Details</Link>

            </div>

        </div>
    );
}

export default CarCard;