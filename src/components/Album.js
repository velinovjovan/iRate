import { useEffect, useRef, useState } from "react";
import { colors } from "../utils/colors";
import CountUp from "react-countup";
import gsap from "gsap";
import SongList from "./SongList";

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
                backgroundColor:
                  album.avg >= 10.1
                    ? "#327086"
                    : album.avg >= 9.9
                    ? "#3D88A4"
                    : album.avg >= 9.5
                    ? "#507E4E"
                    : album.avg >= 9.0
                    ? "#69A267"
                    : album.avg >= 8.5
                    ? "#8FB98D"
                    : album.avg >= 8.0
                    ? "#B5D0B3"
                    : album.avg >= 7.5
                    ? "#CEE0CC"
                    : album.avg >= 7.0
                    ? "#DBE8D9"
                    : album.avg >= 6.5
                    ? "#F2D891"
                    : album.avg >= 6.0
                    ? "#ECC55B"
                    : album.avg >= 5.5
                    ? "#E7B836"
                    : album.avg >= 5.0
                    ? "#F4783E"
                    : album.avg >= 4.5
                    ? "#F4783E"
                    : album.avg >= 4.0
                    ? "#CD3F3C"
                    : album.avg >= 3.5
                    ? "#CD3F3C"
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
