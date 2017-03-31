# slideshow
Slideshow plugin for jQuery.

## Features
- Lightweight
- Easy to customize

##Options
- autoPlay: Autoplay if set true. Default is false.
- interval: Time in milliseconds before next item is shown.
- activeIndex: Set start item. Default is 0, i.e., the first one.

## Setup
### HTML Snippet

```html
<div class="slideshow js-slideshow">
  <ul class="slides clearfix">
    <li class="slide-item js-slide-item">
      <a class="slide-link" title="This is title..." href="#">
        <img class="slide-image" alt="This is title..." src="https://dummyimage.com/740x274/F25E7A/fff">
      </a>
    </li>
    ...
  </ul>
  <div class="control clearfix">
    <div class="control-item js-control-item">
      <div class="arrow-up"></div>
      <div class="control-point">This is title...</div>
    </div>
    ...
  </div>
</div>
```

### CSS Snippet
Include the css file.

	<link rel="stylesheet" href="css/style.css">

### JavaScript Snippet

```javascript
// start
var slideshow = $.fn.slideshow({
  activeIndex: 1 //the second one
});
slideshow.init();
```

## Requirements
- jQuery v.1.8.2+

## Browsers
- Google Chrome
- Mozilla Firefox
- Microsoft Internet Explorer 8.0+

## License
Released under the [MIT license](http://opensource.org/licenses/MIT).