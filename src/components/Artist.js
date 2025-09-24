export default function Artist({ artist, data }) {
  return (
    <p key={artist} className="artist-name">
      {artist}{" "}
      <span
        className="artist-rating"
        style={{
          color:
            data.total / data.count >= 10.1
              ? "#327086"
              : data.total / data.count >= 9.9
              ? "#3D88A4"
              : data.total / data.count >= 9.5
              ? "#507E4E"
              : data.total / data.count >= 9.0
              ? "#69A267"
              : data.total / data.count >= 8.5
              ? "#8FB98D"
              : data.total / data.count >= 8.0
              ? "#B5D0B3"
              : data.total / data.count >= 7.5
              ? "#CEE0CC"
              : data.total / data.count >= 7.0
              ? "#DBE8D9"
              : data.total / data.count >= 6.5
              ? "#F2D891"
              : data.total / data.count >= 6.0
              ? "#ECC55B"
              : data.total / data.count >= 5.5
              ? "#E7B836"
              : data.total / data.count >= 5.0
              ? "#F4783E"
              : data.total / data.count >= 4.5
              ? "#F4783E"
              : data.total / data.count >= 4.0
              ? "#CD3F3C"
              : data.total / data.count >= 3.5
              ? "#CD3F3C"
              : "#aa2e2c",
        }}
      >
        {(data.total / data.count).toFixed(2)}
      </span>
    </p>
  );
}
