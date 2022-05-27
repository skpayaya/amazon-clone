import "./Header.css";
import Logo from "./assets/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            signOut(auth);
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={user === null ? "/login" : "#"}>
                    <div
                        onClick={handleAuthenticaton}
                        className="header__option"
                    >
                        <span className="header__optionLineOne">
                            Hello {!user ? "Guest" : user.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="header__optionCart">
                        <ShoppingCartIcon />
                        <span className="header__cartCount header__optionLineTwo">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
