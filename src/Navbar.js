import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Simple Todo list</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New todo</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;