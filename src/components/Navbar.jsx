import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>App</h1>
            <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/AssistiveTech">Assistive Technology</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/platform-guide">Guide</Link>
            </div>
        </nav>
    );
}

export default Navbar;