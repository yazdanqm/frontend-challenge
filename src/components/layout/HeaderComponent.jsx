import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            <h1 className="text-s24sm sm:text-s24 font-bold">News Blog</h1>
            <ul className="navbar flex items-center gap-6">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div>search</div>
        </div>
    )
}
export default HeaderComponent