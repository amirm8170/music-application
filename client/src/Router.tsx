import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/components/events/event/Event";
import Events from "./pages/components/events/Events";
import Home from "./pages/components/home/Home";
import LikedSongs from "./pages/components/liked-songs/LikedSongs";
import Login from "./pages/components/login/Login";
import Search from "./pages/components/search/Search";
import SignUp from "./pages/components/sign-up/SignUp";
import Songs from "./pages/components/songs/Songs";
import Main from "./pages/Main";
import { setAuth, setId } from "./redux/authSlice";
import { setEvents } from "./redux/eventsSlice";
import { setLikedMusic, setMyMusic } from "./redux/myMusicSlice";
import { setSongs } from "./redux/songsSlice";
import { setVideos } from "./redux/videosSlice";
import Api from "./services/Api";
import api, { USERINFORMATIONSURLS } from "./services/Api";
import { logOut } from "./utils/logOut";

const Router = () => {
  const { auth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const token = Cookies.get("Token");
  const id = Cookies.get("id");
  const getData = useCallback(async () => {
    const [songs, likedSongs, videos, events] = await Promise.all(
      USERINFORMATIONSURLS.map((url) =>
        Api.get(url + id)
          .then(async (response) => response.data)
          .catch(() => logOut())
      )
    );
    if (songs) {
      dispatch(setMyMusic(songs));
      dispatch(setLikedMusic(likedSongs));
      dispatch(setVideos(videos));
      dispatch(setEvents(events));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token && !auth) {
      dispatch(setAuth(token));
      getData();
    }
  }, [token, auth]);

  useEffect(() => {
    if (id) {
      dispatch(setId(id));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/search" element={<Search />} />
        <Route path="/liked-songs" element={<LikedSongs />} />
        <Route path="/songs" element={<Songs />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
