import { SetStateAction, useState } from "react";
import HomeIconSeleted from "../../icons/HomeIconSeleted";
import "./Side.scss";
import { pallet } from "../../layout/pallet";
import EventIcon from "../../icons/EventIcon";
import SearchIcon from "../../icons/SearchIcon";
import MyMusicIcon from "../../icons/MYMusicIcon";
import HomeIcon from "../../icons/HomeIcon";
import EventIconSelected from "../../icons/EventIconSelected";
import SearchIconSelected from "../../icons/SearchIconSelected";
import { Link, useNavigate } from "react-router-dom";
import SongsIcon from "../../icons/SongsIcon";
import BlankLikeIcon from "../../icons/BlankLikeIcon";
import HeartFillIcon from "../../icons/HeartFillIcon";
import CameraIcon from "../../icons/CameraIcon";
import ArtistIcon from "../../icons/ArtistIcon";
import AlbumsIcon from "../../icons/AlbumsIcon";
import { useSelector } from "react-redux";

interface props {
  setTab: React.Dispatch<SetStateAction<number>>;
  tab: number;
}

const Side = ({ setTab, tab }: props) => {
  const [openMyMusic, setOpenMyMusic] = useState(false);
  const { auth } = useSelector((state: any) => state.auth);const navigate = useNavigate()

  return (
    <nav className="side-container">
      <img className="side-logo" src="./assets/logo.png" alt="rapfa" />
      <ul className="side-items-container">
        <li
          className={tab === 0 ? "site-items active" : "site-items"}
          onClick={() => setTab(0)}
        >
          <Link to="/" className="site-items-link">
            {tab === 0 ? (
              <HomeIconSeleted
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            ) : (
              <HomeIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            )}
            <span className="side-item">Home</span>
          </Link>
        </li>
        <li
          className={tab === 1 ? "site-items active" : "site-items"}
          onClick={() => setTab(1)}
        >
          <Link to="/events" className="site-items-link">
            {tab === 1 ? (
              <EventIconSelected
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            ) : (
              <EventIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            )}
            <span className="side-item">Events</span>
          </Link>
        </li>
        <li
          className={tab === 2 ? "site-items active" : "site-items"}
          onClick={() => setTab(2)}
        >
          <Link to="/search" className="site-items-link">
            {tab === 2 ? (
              <SearchIconSelected
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            ) : (
              <SearchIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
            )}
            <span className="side-item">Search</span>
          </Link>
        </li>
        <li
          className={tab === 3 ? "site-items active" : "site-items"}
          onClick={() => {
            setTab(3);
            setOpenMyMusic(!openMyMusic);
            !auth && navigate('/login')
          }}
        >
          <span className="side-item mymusic">My Music</span>
          <span className={openMyMusic && auth ? "myMusic-icon-container show" : "myMusic-icon-container"}>
            <MyMusicIcon
              width={5.25}
              height={9.75}
              color={pallet.purple.purple4}
            />
          </span>
        </li>
      </ul>
      {auth && (
        <ul
          className={
            openMyMusic
              ? "side-items-container noMargin show"
              : "side-items-container noMargin"
          }
        >
          <li
            className={tab === 4 ? "site-items active" : "site-items"}
            onClick={() => setTab(4)}
          >
            <Link to="/songs" className="site-items-link">
              <SongsIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />
              <span className="side-item">Songs</span>
            </Link>
          </li>
          <li
            className={tab === 5 ? "site-items active" : "site-items"}
            onClick={() => setTab(5)}
          >
            <Link to="/liked-songs" className="site-items-link">
              {tab === 5 ? (
                <HeartFillIcon
                  width={22.5}
                  height={20.69}
                  color={pallet.purple.purple4}
                />
              ) : (
                <BlankLikeIcon
                  width={22.5}
                  height={20.69}
                  color={pallet.purple.purple4}
                />
              )}
              <span className="side-item">Liked Songs</span>
            </Link>
          </li>
          <li
            className={tab === 6 ? "site-items active" : "site-items"}
            onClick={() => setTab(6)}
          >
            <Link to="/events" className="site-items-link">
              <CameraIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />

              <span className="side-item">Videos</span>
            </Link>
          </li>
          <li
            className={tab === 7 ? "site-items active" : "site-items"}
            onClick={() => setTab(7)}
          >
            <Link to="/events" className="site-items-link">
              <ArtistIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />

              <span className="side-item">Artists</span>
            </Link>
          </li>
          <li
            className={tab === 8 ? "site-items active" : "site-items"}
            onClick={() => setTab(8)}
          >
            <Link to="/events" className="site-items-link">
              <AlbumsIcon
                width={22.5}
                height={20.69}
                color={pallet.purple.purple4}
              />

              <span className="side-item">Albumes</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Side;
