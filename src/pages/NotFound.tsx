import { Link } from 'react-router'

const NotFound = () => (
    <>
        <h1 tabIndex={-1}>Page not found</h1>
        <p className="lead">There's no page at this address. It may have moved when the site was reorganized.</p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </>
)

export default NotFound
