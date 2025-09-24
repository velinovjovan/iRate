import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { albums } from "../utils/albums";
import Selects from "./Selects";
import Album from "./Album";

export default function Artists({ phase }) {
  const [sort, setSort] = useState("rating");
  const [show, setShow] = useState("5");

  const albumsRef = useRef(null);

  const albumi = phase ? albums.jovan : albums.meli;
  let sortedAlbums = albumi.slice();

  if (sort === "chronological") {
    sortedAlbums = albumi.slice();
  } else if (sort === "rating") {
    sortedAlbums = albumi.slice().sort((a, b) => b.avg - a.avg);
  } else {
    sortedAlbums = albumi
      .slice()
      .sort((a, b) => a.artist.localeCompare(b.artist));
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
  }, [phase, albumi, sort, show]);

  return (
    <div>
      <Selects
        phase={phase}
        show={show}
        sort={sort}
        setSort={setSort}
        setShow={setShow}
      />
      <div className="album-list" ref={albumsRef}>
        {sortedAlbums
          .slice(0, Number(show === "all" ? sortedAlbums.length : show))
          .map((album, index) => (
            <Album album={album} phase={phase} key={album.title} />
          ))}
      </div>
    </div>
  );
}
