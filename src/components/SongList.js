import { useEffect, useRef } from "react";
import { colors } from "../utils/colors";
import gsap from "gsap";
import Song from "./Song";

export default function SongList({ phase, album }) {
  const songListRef = useRef(null);

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
  }, []);

  return (
    <ul
      className="song-list"
      style={{ backgroundColor: colors.light[phase ? 0 : 1] }}
      ref={songListRef}
    >
      {album.songs.map((song, idx) => (
        <Song song={song} key={idx} />
      ))}
    </ul>
  );
}
