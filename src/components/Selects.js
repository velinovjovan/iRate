import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Selects({
  sort,
  genre,
  genres,
  setSort,
  setGenre,
  phase,
}) {
  const selectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      selectsRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
      }
    );
  }, [phase]);

  return (
    <div className="selects" ref={selectsRef}>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="rating">BY RATING</option>
        <option value="chronological">BY ADDITION</option>
        <option value="artist">BY ARTIST</option>
      </select>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">ALL GENRES</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
