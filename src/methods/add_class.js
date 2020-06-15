export default function (classes) {
  return this.each(function (el) {
    el.className += " " + classes;
  });
}
