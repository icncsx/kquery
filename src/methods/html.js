export default function (val) {
  let len = this.length;
  if (val === undefined) {
    return len > 0 ? this[0].innerHTML : undefined;
  }

  while (len--) {
    this[len].innerHTML = val;
  }
  return this;
}
