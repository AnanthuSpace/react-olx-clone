import { useContext } from "react";

import "../../public/Header.css";
import OlxLogo from "../assets/OlxLogo";
import Search from "../assets/Search";
import Arrow from "../assets/Arrow";
import SellButton from "../assets/SellButton";
import SellButtonPlus from "../assets/SellBUttonPlus";
import { userContext } from "../Store/userContext";
import { FirebaseContext } from "../Store/FirebaseContext";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";

function Header() {
  const { user, setUser } = useContext(userContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const logOut = (event) => {
    event.preventDefault();
    const authentication = getAuth(firebase);
    authentication.signOut();
    setUser(null);
    navigate("/login");
  };

  const sellHandle = () => {
    if (user) {
      navigate("/create");
    } else {
      toast.error("Login your account");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName" onClick={() => navigate("/")}>
            <OlxLogo />
          </div>
          <div className="placeSearch">
            <Search />
            <input type="text" defaultValue={"India"} />
            <Arrow />
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff" />
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow />
          </div>
          <div className="loginPage">
            {user ? (
              <span onClick={(e) => logOut(e)}>Logout</span>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
            <hr />
          </div>
          <div className="sellMenu" onClick={sellHandle}>
            <SellButton />
            <div className="sellMenuContent">
              <SellButtonPlus />
              <span>SELL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
