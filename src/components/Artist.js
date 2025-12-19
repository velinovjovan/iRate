import ratingToColor from "../utils/ratingColor";

export default function Artist({ artist, data }) {
  return (
    <p key={artist} className="artist-name">
      {artist}{" "}
      <span
        className="artist-rating"
        style={{
          color: ratingToColor(data.total / data.count),
        }}
      >
        {(data.total / data.count).toFixed(2)}
      </span>
    </p>
  );
}
