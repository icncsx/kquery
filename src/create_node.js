export default (html) => {
  let div = document.createElement("div"); // placeholder
  div.innerHTML = html;
  return div.firstChild;
};
