# kquery

This is a jQuery clone I built to learn how to create a lightweight DOM manipulation library such as jQuery. 

## How to use

Just like how you would use jQuery! These are the methods which are currently supported.

- [addClass](https://api.jquery.com/addClass/)
- [append](https://api.jquery.com/append/)
- [children](https://api.jquery.com/children/)
- [css](https://api.jquery.com/css/)
- [first](https://api.jquery.com/first/)
- [last](https://api.jquery.com/last/)
- [get](https://api.jquery.com/get/)
- [hide](https://api.jquery.com/hide/)
- [html](https://api.jquery.com/html/)
- [off](https://api.jquery.com/off/)
- [on](https://api.jquery.com/on/)
- [removeClass](https://api.jquery.com/removeClass/)
- [show](https://api.jquery.com/show/)

## Demo

```html
<!-- near the bottom of your HTML file -->
<script type="module" src="./src/kquery.js"></script>

<script>
window.onload = function () {
    const $listElements = $("li");
    $listElements.hide(); // POOF!
};
</script>
```

## API

Methods and their behavior mimic those which exist in [jQuery](https://jquery.com/). I purposely referenced their [API](https://api.jquery.com/) docs to create a priority list of methods I wanted to implement for my own jQuery type library.
