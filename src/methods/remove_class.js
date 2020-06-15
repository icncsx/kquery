export default function (className) {
  return this.each(function (el) {
    el.className = el.className.replace(
      new RegExp("\\b" + className + "\\b", "g")
    );
  });
}
