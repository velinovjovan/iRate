import { useEffect, useRef, useState } from "react";
import { colors } from "../utils/colors";
import CountUp from "react-countup";
import gsap from "gsap";

export default function Album({ phase, album, index }) {
  const [show, setShow] = useState(false);
  const songListRef = useRef(null);
  const errowRef = useRef(null);

  function handleOnClick() {
    setShow((show) => !show);
  }

  useEffect(() => {
    if (songListRef.current) {
      gsap.fromTo(
        songListRef.current,
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
        }
      );
    }

    if (show === true) {
      if (errowRef.current) {
        gsap.fromTo(
          errowRef.current,
          { rotation: 0, y: 0 },
          {
            rotation: 180,
            y: -10,
            duration: 3,
            ease: "power3.out",
          }
        );
      }
    } else {
      if (errowRef.current) {
        gsap.fromTo(
          errowRef.current,
          { rotation: 180, y: -10 },
          {
            rotation: -0,
            y: 0,
            duration: 3,
            ease: "power3.out",
          }
        );
      }
    }
  }, [show]);

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
          ref={errowRef}
          onClick={handleOnClick}
          style={{
            color: phase ? colors.primaryDark[0] : colors.primaryDark[1],
          }}
        >
          &#9661;
        </p>
      </div>
      {show && (
        <ul
          className="song-list"
          style={{ backgroundColor: colors.light[phase ? 0 : 1] }}
          ref={songListRef}
        >
          {album.songs.map((song, idx) => (
            <li key={idx} className="song-item">
              <span
                className="song-title"
                style={{ color: colors.primaryDark[phase ? 0 : 1] }}
              >
                {song.title}{" "}
                {song.placement[0] !== "n" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trophy-fill"
                    viewBox="0 0 16 16"
                    className="trophy"
                    style={{
                      color:
                        song.placement[0] === "1"
                          ? "#EFBF04"
                          : song.placement[0] === "2"
                          ? "#C4C4C4"
                          : "#CE8946",
                    }}
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                  </svg>
                )}
              </span>
              <span
                className="song-rating"
                style={{
                  backgroundColor:
                    song.rating >= 10.1
                      ? "#327086"
                      : song.rating >= 9.9
                      ? "#3D88A4"
                      : song.rating >= 9.5
                      ? "#507E4E"
                      : song.rating >= 9.0
                      ? "#69A267"
                      : song.rating >= 8.0
                      ? "#8FB98D"
                      : song.rating >= 7.0
                      ? "#B5D0B3"
                      : song.rating >= 6.5
                      ? "#E6B325"
                      : song.rating >= 5.5
                      ? "#D9534F"
                      : "#aa2e2c",
                  color: song.rating > 10 ? "white" : "black",
                }}
              >
                {" "}
                {song.rating >= 10
                  ? song.rating.toFixed(1)
                  : song.rating.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
