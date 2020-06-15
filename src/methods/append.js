export default function (html) {
  return this.each(function (el) {
    el.innerHTML = el.innerHTML + html;
  });
}
