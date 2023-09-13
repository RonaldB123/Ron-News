import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
            <ul className="navbar-container">
                <li className="navbar-header"><Link to="/">Ron's News</Link></li>
                <li className="navbar-articles"><Link to="/articles">All Articles</Link></li>
                <li className="navbar-topics">Topics</li>
                <li className="navbar-login">Login</li>
            </ul>
    )
}