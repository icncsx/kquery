import createNode from "./create_node.js";
import addClass from "./methods/add_class.js";
import removeClass from "./methods/remove_class.js";
import on from "./methods/on.js";
import off from "./methods/off.js";
import hide from "./methods/hide.js";
import show from "./methods/show.js";
import first from "./methods/first.js";
import last from "./methods/last.js";
import append from "./methods/append.js";
import get from "./methods/get.js";
import children from "./methods/children.js";
import css from "./methods/css.js";
import html from "./methods/html.js";
import each from "./each.js";

(function (window) {
  function $(selector) {
    if (!(this instanceof $)) {
      return new $(selector);
    }
    this.length = 0;

    this.nodes = [];

    if (typeof selector === "string") {
      this.selector = selector;

      if (selector[0] === "<" && selector[selector.length - 1] === ">") {
        this.nodes = [createNode(selector)];
      } else {
        this.nodes = [].slice.call(document.querySelectorAll(selector));
      }
    } else if (
      selector instanceof HTMLElement ||
      selector instanceof NodeList ||
      Array
    ) {
      this.nodes =
        selector.length > 1 ? Array.prototype.slice.call(selector) : [selector];
    }

    if (this.nodes.length) {
      this.length = this.nodes.length;
      for (let i = 0; i < this.nodes.length; i++) {
        this[i] = this.nodes[i];
      }
      delete this.nodes;
    }
  }

  // Methods
  $.prototype.each = each;

  $.prototype.addClass = addClass;

  $.prototype.removeClass = removeClass;

  $.prototype.on = on;

  $.prototype.off = off;

  $.prototype.first = first;

  $.prototype.last = last;

  $.prototype.get = get;

  $.prototype.children = children;

  $.prototype.append = append;

  $.prototype.html = html;

  $.prototype.hide = hide;

  $.prototype.show = show;

  $.prototype.css = css;

  window.$ = $;
})(window);

export default window.$;
