import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDog } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ numberOfApp }) => {
    return (
        <nav className="nav__df">
            <Link to="/" className="nav__link nav__logo__corp">
                <img className="nav__logo" src="https://img.freepik.com/premium-vector/dog-cat-paw-print-heart-icon-paw-print-animal-paw-vector-illustration_654297-128.jpg" alt="" />
            </Link>

            <ul className="nav__list">
                <li className="nav__link"> <Link to="/AvailableDogs">Adopt</Link> </li>
                <li className="nav__link"> <Link to="/Volunteers">Get Involved</Link> </li>

            </ul>

            <div className="nav__block">
                <Link to="/Donate" className="nav__donate">
                    <FontAwesomeIcon icon={faHeart} /> Donate
                </Link>

                <Link to="/Forms" className="nav__app"> <FontAwesomeIcon icon={faDog} /></Link>
                
                {numberOfApp > 0 && <span className="nav__num">{numberOfApp}</span>}
            </div>
        </nav>
    );
}

export default Nav;