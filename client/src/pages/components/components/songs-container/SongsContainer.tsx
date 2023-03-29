import SongSingleRow from "../../home/components/SongSingleRow";
import "./SongsContainer.scss";

const SongsContainer = ({ songList }: any) => {
  return (
    <section className="song-container-container">
      {songList &&
        songList?.map((song: any , index:number) => {
          return <SongSingleRow key={song._id} song={song} index={index}/>;
        })}
    </section>
  );
};

export default SongsContainer;
