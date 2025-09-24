import { useEffect, useRef } from "react";
import gsap from "gsap";
import { albums } from "../utils/albums";
import { colors } from "../utils/colors";
import Artist from "./Artist";

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
          <Artist artist={artist} data={data} key={artist} />
        ))}
    </div>
  );
}
