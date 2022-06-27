import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar p-5 flex items-center max-w-xl my-0 mx-auto border-b border-grey-50">
            <h1 className="text-pink-600">Simple Todo list</h1>
            <div className="ml-auto">
                <Link className="ml-4 no-underline p-2 hover:text-pink-600" to="/">Home</Link>
                <Link className="ml-4 no-underline p-2 hover:text-pink-600" to="/pages/Blog">Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;