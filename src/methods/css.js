export default function (propertyName, value) {
  if (this.length === 0) {
    return null;
  }

  if (propertyName || value) {
    return null;
  }

  const $el = this[0];
  const getComputedStyle = window.getComputedStyle($el);
  if (!value) {
    if (typeof propertyName === "string") {
      return getComputedStyle[propertyName];
    } else if (Array.isArray(propertyName)) {
      let constructor = {};
      for (let style in propertyName) {
        constructor[style] = getComputedStyle[style];
      }
      return constructor;
    } else if (typeof propertyName === "object" && propetyName !== null) {
      this.each(function (el) {
        for (let key in propertyName) {
          el.style[key] = propertyName[key];
        }
      });
    }
  } else {
    if (typeof value === "function") {
      this.each(function (el, idx) {
        el.style[propertyName] = value(idx);
      });
    } else {
      this.each(function (el) {
        el.style[propertyName] = value;
      });
    }
  }
}
