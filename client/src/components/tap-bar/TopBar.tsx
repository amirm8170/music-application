import Cookies from "js-cookie";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "../../icons/CloseIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import SearchIcon from "../../icons/SearchIcon";
import { pallet } from "../../layout/pallet";
import { logOut } from "../../utils/logOut";
import Input from "../input/Input";
import "./TopBar.scss";

const TopBar = () => {
  const { auth } = useSelector((state: any) => state.auth);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate()
  const logoutHandler = () => {
    logOut();
    navigate('/login')
  };
  return (
    <div className="top-bar-container">
      <Input
        className="search-input-field"
        leftIcon={
          <SearchIcon width={20} height={20} color={pallet.purple.purple6} />
        }
        rightIcon={
          <CloseIcon width={20} height={20} color={pallet.purple.purple6} />
        }
        placeholder="Search"
      />
      {!auth ? (
        <div className="top-bar-auth-section">
          <Link to="/sign-up" className="top-bar-sign-up">
            Sign up
          </Link>
          <Link to="/login" className="top-bar-login">
            Login
          </Link>
        </div>
      ) : (
        <span
          className="top-bar-profile"
          onClick={() => {}}
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          <ProfileIcon width={40} height={40} color={pallet.purple.purple6} />
          <div
            className={
              showModal ? "top-bar-profile-box show" : "top-bar-profile-box"
            }
          >
            <button onClick={logoutHandler} className="top-bar-profile-box-btn">
              Log Out
            </button>
          </div>
        </span>
      )}
    </div>
  );
};

export default TopBar;
