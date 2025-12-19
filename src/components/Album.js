import { useEffect, useRef, useState } from "react";
import { colors } from "../utils/colors";
import CountUp from "react-countup";
import gsap from "gsap";
import SongList from "./SongList";
import ratingToColor from "../utils/ratingColor";

export default function Album({ phase, album }) {
  const [show, setShow] = useState(false);
  const errowRef = useRef(null);

  function handleOnClick() {
    setShow((show) => !show);
  }

  useEffect(() => {
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

  return (
    <div className="album-whole">
      <div
        className="album"
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
                backgroundColor: ratingToColor(album.avg),
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
            color: colors.primaryDark[phase ? 0 : 1],
          }}
        >
          &#9661;
        </p>
      </div>
      {show && <SongList album={album} phase={phase} />}
    </div>
  );
}
