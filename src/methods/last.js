import $ from "../kQuery.js";

export default function () {
  return $(this[this.length - 1]);
}
