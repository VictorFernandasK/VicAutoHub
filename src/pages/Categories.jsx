import { Link, Outlet } from "react-router-dom";

function Categories() {

    return (
        <div className="page">
            <h1>Car Categoreis</h1>

            <div className="category-links">
                <Link to="SUV">SUV</Link>
                <Link to="Sedan">Sedan</Link>
                <Link to="Hatchback">HatchBack</Link>

            </div>

            <Outlet />

        </div>
    );
}

export default Categories;