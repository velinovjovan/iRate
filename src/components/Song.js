import { colors } from "../utils/colors";
import ratingToColor from "../utils/ratingColor";

export default function Song({ song, phase }) {
  return (
    <li className="song-item">
      <span
        className="song-title"
        style={{ color: colors.primaryDark[phase ? 0 : 1] }}
      >
        {song.title}{" "}
        {song.placement[0] !== "n" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trophy-fill"
            viewBox="0 0 16 16"
            className="trophy"
            style={{
              color:
                song.placement[0] === "1"
                  ? "#EFBF04"
                  : song.placement[0] === "2"
                  ? "#C4C4C4"
                  : "#CE8946",
            }}
          >
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
          </svg>
        )}
      </span>
      <span
        className="song-rating"
        style={{
          backgroundColor: ratingToColor(song.rating),
          color: "black",
        }}
      >
        {" "}
        {song.rating >= 10 ? song.rating.toFixed(1) : song.rating.toFixed(2)}
      </span>
    </li>
  );
}
