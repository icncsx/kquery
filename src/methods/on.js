export default function (name, handler) {
  return this.each(function (el) {
    el.addEventListener(name, handler, false);
  });
}
