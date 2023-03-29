import { useEffect, useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";
import Api from "../../../services/Api";
import notif from "../../../services/notif";
import SongPlayer from "../components/song-player/SongPlayer";
import SongSingleRow from "./components/SongSingleRow";
import "./Home.scss";

interface dataType {
  createdAt: string;
  downloads: number;
  likes: number;
  picUrl: string;
  singer: string;
  songName: string;
  songUrl: string;
  type: string;
  updatedAt: string;
}

const Home = () => {
  const [played , setPlayed] = useState(false)
  const [songs, setSongs] = useState<dataType[]>([]);
  const [song , setSong] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(()=>{
    if(song<0){
      setSong(0)
    }
    if(song>songs.length-1){
      setSong(songs.length-1)
    }
  },[song])
  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      try {
        const res = await Api.get("/songs");
        setSongs(res.data);
      } catch (error: any) {
        notif(error.response.data.err.message, "danger");
      }
      setLoading(false);
    };
    getSongs();
  }, []);
  const items = [
    { title: "sirvan", id: 1 },
    { title: "xaniar", id: 2 },
    { title: "ebi", id: 3 },
    { title: "siavash", id: 4 },
  ];
  return (
    <section className="home-container" style={{paddingBottom : played ? '140px' : '0px'}}>
      {played &&  <SongPlayer song = {songs[song]} setSong={setSong} /> }
     
      <img className="home-image" src="./assets/home-top.png" alt="rapfa" />
      <div className="home-right-box">
        <div className="home-right-playlist">
          <div className="home-right-playlist-container">
            <h2 className="home-right-title">HOT SONGS</h2>
            <span className="home-right-see-btn">SEE ALL</span>
          </div>
          <div className="home-songs-container">
            {loading ? (
              <div className="home-loading-container">
                <LoadingIcon width={130} height={130} color={pallet.purple.purple7}/>
              </div>
            ) : (
              songs &&
              songs?.map((song: any, index: number) => {
                return <SongSingleRow key={index} song={song} index={index} setSong={setSong} setPlayed={setPlayed} />;
              })
            )}
          </div>
        </div>
        <div className="home-right-playlist-all">
          <div className="home-right-carousel">
            <Carousel items={items} title="Rapfa Playlists" radius="10px" />
            <Carousel items={items} title="Tranding Artist" radius="50%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
