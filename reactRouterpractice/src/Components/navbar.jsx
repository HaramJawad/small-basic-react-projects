import { Link } from "react-router-dom";
export default function Navbar()
{
    return(
        <nav className="bg-blue-600 p-4 shadow-md sticky top-0">
            <div className="flex justify-center gap-8 text-lg  font-semibold">
         <Link to="" className=" text-white-600 hover:text-yellow-300 transition">Home</Link>
         <Link to="/about" className=" text-white-600 hover:text-yellow-300 transition">About</Link>
         <Link to="/contact" className="text-white-600  hover:text-yellow-300 transition">Contact</Link>
         </div>
        </nav>

    )
}