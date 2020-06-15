import $ from "../kquery.js";

export default function (selector) {
  let childNodes = [];
  this.each(function (el) {
    // direct children only
    if (selector) {
      childNodes = childNodes.concat(
        [...el.childNodes].filter(function (child) {
          return child.matches(selector);
        })
      );
    } else {
      childNodes = childNodes.concat([...el.childNodes]);
    }
  });
  return $(childNodes);
}
