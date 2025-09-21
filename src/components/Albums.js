import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CountUp from "react-countup";
import { colors } from "../utils/colors";
import { albums } from "../utils/albums";

export default function Artists({ phase }) {
  const albumi = phase ? albums.jovan : albums.meli;
  const albumsRef = useRef(null);

  const [sort, setSort] = useState("rating");

  let sortedAlbums;

  if (sort === "chronological") {
    sortedAlbums = albumi;
  } else if (sort === "rating") {
    sortedAlbums = albumi.sort((a, b) => b.avg - a.avg);
  } else {
    sortedAlbums = albumi.sort((a, b) => a.artist.localeCompare(b.artist));
  }

  useEffect(() => {
    if (albumsRef.current) {
      gsap.fromTo(
        albumsRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
        }
      );
    }
  }, [phase, albumi]);

  return (
    <div className="album-list" ref={albumsRef}>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <button>
          <selectedcontent></selectedcontent>
        </button>
        <option value="rating">BY RATING</option>
        <option value="chronological">CHRONOLOGICAL</option>
        <option value="artist">BY ARTIST</option>
      </select>
      {sortedAlbums.map((album, index) => (
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
            style={{
              color: phase ? colors.primaryDark[0] : colors.primaryDark[1],
            }}
          >
            &#9661;
          </p>
          {/* <ul className="song-list">
              {album.songs.map((song, idx) => (
                <li key={idx} className="song-item">
                <span className="song-title">{song.title}</span>
                <span className="song-rating">Rating: {song.rating}</span>
                {song.placement !== "none" && (
                  <span className="song-placement">
                  Placement: {song.placement}
                  </span>
                  )}
                  </li>
                  ))}
                  </ul> */}
        </div>
      ))}
    </div>
  );
}
