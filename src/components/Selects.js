import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Selects({ sort, show, setSort, setShow, phase }) {
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
        <option value="chronological">CHRONOLOGICAL</option>
        <option value="artist">BY ARTIST</option>
      </select>
      <select value={show} onChange={(e) => setShow(e.target.value)}>
        <option value="5">SHOW 5</option>
        <option value="10">SHOW 10</option>
        <option value="all">SHOW ALL</option>
      </select>
    </div>
  );
}
