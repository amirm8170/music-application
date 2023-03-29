import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import BlankLikeIcon from "../../../../icons/BlankLikeIcon";
import HeartFillIcon from "../../../../icons/HeartFillIcon";
import InfoButtonIcon from "../../../../icons/InfoButtonIcon";
import { pallet } from "../../../../layout/pallet";
import Api from "../../../../services/Api";
import notif from "../../../../services/notif";
import "./SongSingleRow.scss";

const SongSingleRow = ({ song, index , setSong , setPlayed }: any) => {
  const { id } = useSelector((state: any) => state.auth);
  const [likeStatus, setLikeStatus] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const likeClickHandler = useCallback(async () => {
    setLikeStatus(!likeStatus);
    try {
      const res = await Api.put(`/liked-songs/${id}`, { songId: song._id });
      console.log(res);
    } catch (error: any) {
      console.log(error);
      notif(error.response.data.err.message, "danger");
    }
  }, [likeStatus]);
  const addHandler = useCallback(async ()=>{
    try {
      const response = Api.put(`/add-song/${id}`,{songId:song._id})
      console.log(response)
    } catch (error:any) {
      console.log(error)
      notif(error.response.data.err.message, "danger");
    }
  },[showModal])
  const handleDownloadClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const url = song.songUrl;
    const link = document.createElement('a');
    link.href = url;
    link.download = song.songName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="song-row" onClick={()=>{setSong(index) ; setPlayed(true)}} >
      <span className="song-row-number">{index + 1}</span>
      <div className="song-row-info">
        <img
          className="song-row-info-image"
          src={song.picUrl}
          alt={song.songName}
        />
        <div className="song-row-songInfo">
          <span>{song.singer}</span>
          <span>{song.songName}</span>
        </div>
      </div>
      <span className="song-row-last-three-section">03:00</span>
      <span className="song-row-last-three-section" onClick={likeClickHandler}>
        {likeStatus ? (
          <HeartFillIcon width={16} height={15} color={pallet.yellow.yellow1} />
        ) : (
          <BlankLikeIcon width={16} height={15} color={pallet.yellow.yellow1} />
        )}
      </span>
      <span
        className="song-row-last-three-section"
        onClick={() => setShowModal(!showModal)}
      >
        <InfoButtonIcon
          width={19.5}
          height={4.5}
          color={pallet.yellow.yellow1}
        />
        <div
          className={showModal ? "song-row-info-box show" : "song-row-info-box"}
        >
          <span
            className={
              showModal
                ? "song-row-info-box-item show"
                : "song-row-info-box-item"
            }
          >
            Like
          </span>
          <span
            className={
              showModal
                ? "song-row-info-box-item show"
                : "song-row-info-box-item"
            }
            onClick={addHandler}
          >
            Add
          </span>
          <a
          onClick={handleDownloadClick}
          // href={song.songUrl} download={song.songName} 
            className={
              showModal
                ? "song-row-info-box-item show"
                : "song-row-info-box-item"
            }
          >
            Download
          </a>
        </div>
      </span>
    </div>
  );
};

export default SongSingleRow;
