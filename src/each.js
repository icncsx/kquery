export default function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
  return this;
}
