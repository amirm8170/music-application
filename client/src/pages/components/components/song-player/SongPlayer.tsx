import { Slider } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import BlankLikeIcon from "../../../../icons/BlankLikeIcon";
import DownloadIcon from "../../../../icons/DownloadIcon";
import PlayerBackIcon from "../../../../icons/PlayerBackIcon";
import PlayerNextIcon from "../../../../icons/PlayerNextIcon";
import PlayerPause from "../../../../icons/PlayerPause";
import PlayerPlay from "../../../../icons/PlayerPlay";
import PlayerReapet from "../../../../icons/PlayerReapet";
import PlayerShuffle from "../../../../icons/PlayerShuffle";
import ValumeIcon from "../../../../icons/ValumeIcon";
import { pallet } from "../../../../layout/pallet";
import "./SongPlayer.scss";

const SongPlayer = ({ song, setSong }: any) => {
  const audioElement = useRef<any>(null);
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);

  const handleSeekChange = (event: Event, newValue: number | number[]) => {

    audioElement.current.currentTime = ( (newValue as number) * duration)/100;
    console.log(newValue as number);
    console.log(audioElement.current.currentTime);
  };
  const handleVolumeChange= (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
    console.log(newValue as number);
  };
  // console.log(seekTime)
  useEffect(() => {
    isPlaying
      ? audioElement.current
          .play()
          .then(() => {})
          .catch((e: any) => {
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
          })
      : audioElement.current.pause();
  }, [isPlaying , song]);
  useEffect(() => {
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.volume = volume / 100;
    audioElement.current.muted = isVolumeClicked;
    audioElement.current.onloadeddata = () => {
      if (audioElement.current != null)
        setDuration(audioElement.current.duration);
    };
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    });
  }, [isRepeatClicked, isVolumeClicked , volume]);

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
  }, [currTime, duration]);

  function formatTime(secs: any) {
    const t: any = new Date(1970, 0, 1);
    t.setSeconds(secs);
    let s = t.toTimeString().substr(0, 8);
    if (secs > 86399)
      s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
    return s.substring(3);
  }
  const nextSongHandler = useCallback(() => {
    setSong((prev: number) => prev + 1 , setPlayPauseClicked(false));
    setPlayPauseClicked(true)
  },[song])
  const PreviousSongHandler = useCallback(() => {
    setSong((prev: number) => prev - 1 , setPlayPauseClicked(false));
    setPlayPauseClicked(true)

  },[song])
  return (
    <div className="song-player-container">
      <div className="song-player-info">
        <img
          className="song-player-song-image"
          src={song?.picUrl}
          alt="my music image"
        />
        <div className="song-player-song-info">
          <span>{song?.singer}</span>
          <span>{song?.songName}</span>
        </div>
      </div>
      <div className="playerComponent-container">
        <div className="playerComponent-btn-container">
          <span
            className="player-icon-btn-container"
            onClick={() => setRepeatClick(!isRepeatClicked)}
          >
            <PlayerReapet
              width={24}
              height={24}
              color={isRepeatClicked ? pallet.yellow.yellow2 : pallet.yellow.yellow1}
            />
          </span>
          <span className="player-icon-btn-container"
          onClick={PreviousSongHandler}
          >
            <PlayerBackIcon
              width={24}
              height={24}
              color={pallet.yellow.yellow1}
            />
          </span>
          <span
            className="player-icon-btn-container"
            onClick={() => setPlayPauseClicked(!isPlaying)}
          >
            {isPlaying ? (
              <PlayerPause
                width={24}
                height={24}
                color={pallet.yellow.yellow1}
              />
            ) : (
              <PlayerPlay
                width={24}
                height={24}
                color={pallet.yellow.yellow1}
              />
            )}
          </span>
          <audio
            ref={audioElement}
            style={{ display: "none" }}
            id="1"
            src={song?.songUrl}
            loop={isRepeatClicked}
          />
          <span className="player-icon-btn-container" onClick={nextSongHandler}>
            <PlayerNextIcon
              width={24}
              height={24}
              color={pallet.yellow.yellow1}
            />
          </span>
          <span className="player-icon-btn-container">
            <PlayerShuffle
              width={24}
              height={24}
              color={pallet.yellow.yellow1}
            />
          </span>
        </div>
        <div className="playerComponent-player-container">
          <span style={{ color: pallet.white[100] }}>
            {formatTime(currTime)}
          </span>
          {!isNaN(seekTime) && (
            <Slider
              style={{ color: pallet.purple.purple3, width: `85%` }}
              className={"playback-completed"}
              value={seekTime}
              onChange={handleSeekChange}
            />
          )}
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="playerComponent-btn-container">
        <div className="playerComponent-btn-container-top">
          <span className="player-component-btn-top">
            <BlankLikeIcon
              width={20}
              height={20}
              color={pallet.yellow.yellow1}
            />
          </span>
          <span className="player-component-btn-top">
            <DownloadIcon
              width={20}
              height={20}
              color={pallet.yellow.yellow1}
            />
          </span>
        </div>
        <div className="player-component-btn-bottom">
          <span className="mrt1">
            <ValumeIcon width={15} height={15} color={pallet.yellow.yellow1} />
          </span>
          <Slider
            size="small"
            defaultValue={50}
            value={volume}
            aria-label="Small"
            valueLabelDisplay="auto"
            style={{
              color: pallet.purple.purple3,
              transform: "translateY(2px)",
            }}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
