import { useParams } from "react-router-dom";
import cars from "../data/cars";
import CarCards from "../components/CarCards";

function CategoryCars() {
    const { category } = useParams();

    const filteredCars = cars.filter(
        car => car.category.toLowerCase() === category.toLocaleLowerCase()
        
    );

    return (
        <div>
            <h2>{category} Cars</h2>

            <div className="car-container">
                {filteredCars.length > 0 ? (
                    filteredCars.map(car => (
                        <CarCards key= {car.id} car = {car} />
                    ))

                ) : (
                    <p>No cars available.</p>
                )}

            </div>
        </div>
    );
}

export default CategoryCars;