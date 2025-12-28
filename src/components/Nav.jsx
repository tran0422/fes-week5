import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDog, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Nav = ({ numberOfApp }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <nav className="nav__df tw-max-md:tw-px-0">
            <Link to="/" className="nav__link nav__logo__corp tw-max-md:tw-hidden">
                <img className="nav__logo tw-max-md:tw-hidden" src="https://img.freepik.com/premium-vector/dog-cat-paw-print-heart-icon-paw-print-animal-paw-vector-illustration_654297-128.jpg" alt="" />
            </Link>

            <ul className="nav__list tw-max-md:tw-ml-0 tw-max-md:tw-hidden">
                <li className="nav__link"> <Link to="/AvailableDogs">Adopt</Link> </li>
                <li className="nav__link"> <Link to="/Volunteers">Get Involved</Link> </li>
            </ul>

            <div className="nav__block tw-max-md:tw-hidden">
                <Link to="/Donate" className="nav__donate">
                    <FontAwesomeIcon icon={faHeart} /> Donate
                </Link>

                <Link to="/Forms" className="nav__app"> <FontAwesomeIcon icon={faDog} /></Link>

                {numberOfApp > 0 && <span className="nav__num">{numberOfApp}</span>}
            </div>

            {/*Hamburger, mobile-only*/}
            <button className="tw-hidden tw-max-md:tw-flex tw-items-center tw-ml-auto
            tw-text-[#ff2c2c] tw-bg-white tw-w-12 tw-h-12 tw-justify-center tw-border-0 tw-relative"
                onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={open ? faXmark : faBars} size="3x" />

                {/*Mobile menu*/}
                {open && (
                    <div className="tw-absolute tw-top-full tw-w-screen tw-h-screen tw-right-0 tw-flex tw-flex-col tw-bg-white tw-gap-4 tw-py-4 tw-px-2">
                        <ul className="tw-list-none tw-p-0 tw-m-0 tw-flex tw-flex-col tw-gap-4">
                            <li><Link className="tw-block tw-text-left tw-text-xl tw-py-2 tw-px-8" to="/">Home</Link></li>
                            <li><Link className="tw-block tw-text-left tw-text-xl tw-py-2 tw-px-8" to="/AvailableDogs">Available Dogs</Link></li>
                            <li><Link className="tw-block tw-text-left tw-text-xl tw-py-2 tw-px-8" to="Volunteers">Get Involved</Link></li>
                            <li><Link className="tw-block tw-text-left tw-text-xl tw-py-2 tw-px-8" to="/Donate">Donate</Link></li>
                            <li><Link className="tw-block tw-text-left tw-text-xl tw-py-2 tw-px-8" to="/Forms">Apply for Adoption</Link></li>
                        </ul>
                    </div>
                )}
            </button>
        </nav>
    );
}

export default Nav;