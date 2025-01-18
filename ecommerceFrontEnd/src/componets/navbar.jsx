import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">Ecommerce</Link>
                </div>

                <ul className="flex space-x-6">
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
