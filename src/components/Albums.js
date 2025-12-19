import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { albums } from "../utils/albums";
import Selects from "./Selects";
import Album from "./Album";

export default function Artists({ phase }) {
  const [sort, setSort] = useState("rating");
  const [genre, setGenre] = useState("all");

  const albumsRef = useRef(null);

  const albumi = phase ? albums.jovan : albums.meli;
  const genres = Array.from(new Set(albumi.map((a) => a.genre))).sort();
  const filteredAlbums =
    genre === "all" ? albumi : albumi.filter((a) => a.genre === genre);
  let sortedAlbums = filteredAlbums.slice();

  if (sort === "chronological") {
    sortedAlbums = filteredAlbums.slice();
  } else if (sort === "rating") {
    sortedAlbums = filteredAlbums.slice().sort((a, b) => b.avg - a.avg);
  } else {
    sortedAlbums = filteredAlbums
      .slice()
      .sort((a, b) => a.artist.localeCompare(b.artist));
  }

  useEffect(() => {
    setGenre("all");
    setSort("rating");
  }, [phase]);

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
  }, [phase, albumi, sort, genre]);

  return (
    <div>
      <Selects
        phase={phase}
        sort={sort}
        genre={genre}
        genres={genres}
        setSort={setSort}
        setGenre={setGenre}
      />
      <div className="album-list" ref={albumsRef}>
        {sortedAlbums.map((album, index) => (
          <Album album={album} phase={phase} key={album.title} />
        ))}
      </div>
    </div>
  );
}
