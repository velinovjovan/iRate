import { useEffect, useState } from "react";
import { colors } from "../utils/colors";
import CountUp from "react-countup";

export default function Album({ phase, album, index }) {
  const [show, setShow] = useState(false);
  function handleOnClick() {
    setShow((show) => !show);
  }

  useEffect(() => {
    setShow(false);
  }, [phase]);

  return (
    <div className="album-whole">
      <div
        className="album"
        key={index}
        style={{
          backgroundColor: colors.light[phase ? 0 : 1],
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={album.cover} alt={album.title} className="album-cover" />
          <div className="album-info">
            <div>
              <p className="album-title">{album.title}</p>
              <p className="album-artist">{album.artist}</p>
            </div>
            <p
              className="album-avg"
              style={{
                backgroundColor:
                  album.avg >= 9.5
                    ? "#507E4E"
                    : album.avg >= 8.5
                    ? "#69A267"
                    : album.avg >= 7.5
                    ? "#98D7AE"
                    : album.avg >= 6.5
                    ? "#E6B325"
                    : album.avg >= 5.5
                    ? "#D9534F"
                    : "#aa2e2c",
              }}
            >
              <CountUp
                start={0.0}
                end={album.avg.toFixed(2)}
                duration={2}
                decimals={2}
              ></CountUp>
            </p>
          </div>
        </div>
        <p
          className="errow"
          onClick={handleOnClick}
          style={{
            color: phase ? colors.primaryDark[0] : colors.primaryDark[1],
          }}
        >
          &#9661;
        </p>
      </div>
      {show && (
        <ul className="song-list">
          {album.songs.map((song, idx) => (
            <li key={idx} className="song-item">
              <span className="song-title">{song.title}</span>
              <span className="song-rating"> {song.rating}</span>
              {/* {song.placement !== "none" && (
                <span className="song-placement">
                  Placement: {song.placement}
                </span>
              )} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
