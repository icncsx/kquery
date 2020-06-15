export default function (name, handler) {
  return this.each(function (el) {
    el.removeEventListener(name, handler);
  });
}
