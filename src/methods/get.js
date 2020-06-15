import $ from "../kquery.js";

export default function (idx) {
  if (this.length - 1 > idx) {
    return null;
  } else {
    return $(this[idx]);
  }
}
