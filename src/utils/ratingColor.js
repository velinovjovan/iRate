export default function ratingToColor(rating) {
  if (rating >= 10) {
    return "#3D88A4";
  } else if (rating >= 9.5) {
    return "#507E4E";
  } else if (rating >= 9.0) {
    return "#69A267";
  } else if (rating >= 8.5) {
    return "#8FB98D";
  } else if (rating >= 8.0) {
    return "#B5D0B3";
  } else if (rating >= 7.5) {
    return "#CEE0CC";
  } else if (rating >= 7.0) {
    return "#DBE8D9";
  } else if (rating >= 6.5) {
    return "#F2D891";
  } else if (rating >= 6.0) {
    return "#ECC55B";
  } else if (rating >= 5.5) {
    return "#E7B836";
  } else if (rating >= 5.0) {
    return "#F4783E";
  } else if (rating >= 4.5) {
    return "#F4783E";
  } else if (rating >= 4.0) {
    return "#CD3F3C";
  } else if (rating >= 3.5) {
    return "#CD3F3C";
  } else {
    return "#aa2e2c";
  }
}
