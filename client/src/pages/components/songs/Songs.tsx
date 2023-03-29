import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";
import Api from "../../../services/Api";
import notif from "../../../services/notif";
import SongsContainer from "../components/songs-container/SongsContainer";
import "./Songs.scss";

const Songs = () => {
  const { id } = useSelector((state: any) => state.auth);
  const [songList, setSongList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      try {
        const response = await Api.get(`/user-songs/${id}`);
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
    <>
      {loading ? (
        <div className="home-loading-container">
          <LoadingIcon width={130} height={130} color={pallet.purple.purple7} />
        </div>
      ) : !songList.length ? (
        <div className="song-container-empty">There is no song yet</div>
      ) : (
        <SongsContainer songList={songList} />
      )}
    </>
  );
};

export default Songs;
