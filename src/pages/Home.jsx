import { Link } from "react-router-dom";
import cars from "../data/cars";
import CarCard from "../components/CarCards";
import useFetchData from "../hooks/useFetchData";

function Home() {
    const { data,loading } = useFetchData(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <div>
            <section className="hero">
                <div>
                    <h1>Find Your Dream Car</h1>
                    <p>
                        Discover the perfect car for your lifestyle.
                        Quality cars at the best prices.
                    </p>

                    <Link to="/cars" className="hero-btn">Explore Cars</Link>
                </div>

            </section>

            <section className="section">
                <h2>Featured Cars</h2>

                <div className="car-container">
                    {cars.slice(0, 4).map(car => (
                        <CarCard key={car.id} car = {car} />
                    ))}

                </div>
            </section>

            <section className="section">
                <h2>Why Choose VicAutoHub?</h2>

                <div className="features">
                    <div>
                        <h3>Best Quality</h3>
                        <p>Quality vehicles for every customer.</p>
                    </div>

                    <div>
                        <h3>Affordable Prices</h3>
                        <p>Find cars within your budget.</p>
                    </div>

                    <div>
                        <h3>Test drive</h3>
                        <p>Book your test drive easily.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Out Customer Community</h2>

                {loading ? (
                    <p>Loading customer information...</p>
                ) : (

                    <div className="customers">

                        {data.slice(0, 4).map(customer => (
                            <p key={customer.id}>
                                {customer.name} - {customer.email}
                            </p>
                        ))}

                    </div>
                )}

            </section>
        </div>
    );
}

export default Home;