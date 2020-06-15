import $ from "../kquery.js";

export default function () {
  return $(this[this.length - 1]);
}
