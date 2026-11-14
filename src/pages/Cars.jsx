import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cars from "../data/cars";
import CarCards from "../components/CarCards";

function Cars() {
    const searchInput = useRef(null);
    const [searchParams, setSearchParams] =useSearchParams();
    
    const [brand, setBrand] = useState("All");
    const search = searchParams.get("search") || "";

    function handleSearch() {
        setSearchParams({
            search: searchInput.current.value
        });
    }

    const filteredCars = cars.filter(car => {
        const matchName = car.name.toLowerCase().includes(
            search.toLowerCase()
        );

        const matchBrand = brand === "All" || car.brand === brand;

        return matchName && matchBrand;
    });

    return (
        <div className="page">
            <h1>Available Cars</h1>

            <div className="filters">
                <input
                 type="text"
                 placeholder="Search car name..."
                 ref={searchInput}
                 defaultValue={search}
                />

                <button onClick={handleSearch}>Search</button>

                <select 
                  value={brand}
                  onChange={e => setBrand(e.target.value)}>

                    <option value="All">All Brands</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Tata">Tata</option>
                    <option value="Honda">Honda</option>
                    <option value="Maruthi">Maruthi</option>
                    <option value="Kia">Kia</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mahindra">Mahindra</option>

                </select>
            </div>

            <div className="car-container">
                {filteredCars.length > 0 ? (
                    filteredCars.map(car => (
                        <CarCards key={car.id} car ={car} />
                       ))

                ) : (
                    <p>No cars found.</p>
                )}

            </div>

        </div>
    );
}

export default Cars;