import { useEffect, useRef } from "react";
import gsap from "gsap";
import { albums } from "../utils/albums";
import { colors } from "../utils/colors";

export default function Artists({ phase }) {
  const albumi = phase ? albums.jovan : albums.meli;
  const artistsRef = useRef(null);

  useEffect(() => {
    if (artistsRef.current) {
      gsap.fromTo(
        artistsRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
    }
  }, [phase, albumi]);

  if (albumi.length === 0) {
    return null;
  }

  return (
    <div className="artists" ref={artistsRef}>
      <p
        className="artists-title"
        style={{
          color: colors.primary[phase ? 0 : 1],
          borderColor: colors.primary[phase ? 0 : 1],
        }}
      >
        Artists
      </p>
      {Object.entries(
        albumi.reduce((acc, album) => {
          if (!acc[album.artist]) {
            acc[album.artist] = { total: 0, count: 0 };
          }
          acc[album.artist].total += album.avg;
          acc[album.artist].count += 1;
          return acc;
        }, {})
      )
        .sort((a, b) => b[1].total / b[1].count - a[1].total / a[1].count)
        .map(([artist, data]) => (
          <p key={artist} className="artist-name">
            {artist}{" "}
            <span
              className="artist-rating"
              style={{
                color:
                  data.total / data.count >= 9.5
                    ? "#507E4E"
                    : data.total / data.count >= 8.5
                    ? "#69A267"
                    : data.total / data.count >= 7.5
                    ? "#98D7AE"
                    : data.total / data.count >= 6.5
                    ? "#E6B325"
                    : data.total / data.count >= 5.5
                    ? "#D9534F"
                    : "#aa2e2c",
              }}
            >
              {(data.total / data.count).toFixed(2)}
            </span>
          </p>
        ))}
    </div>
  );
}
