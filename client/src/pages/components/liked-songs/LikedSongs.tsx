import "./LikedSongs.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Api from "../../../services/Api";
import notif from "../../../services/notif";
import SongsContainer from "../components/songs-container/SongsContainer";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";

const LikedSongs = () => {
  const { id } = useSelector((state: any) => state.auth);
  const [songList, setSongList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      try {
        const response = await Api.get(`/user-likedSongs/${id}`);
        setSongList(response.data[0].userSongs);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        notif(error.response.data.err.message, "danger");
      }
    };
    getList();
  }, []);

  return (
    <div className="liked-songs-container">
      {loading ? (
        <div className="home-loading-container">
          <LoadingIcon width={130} height={130} color={pallet.purple.purple7} />
        </div>
      ) : (
        <SongsContainer songList={songList} />
      )}
    </div>
  );
};

export default LikedSongs;
