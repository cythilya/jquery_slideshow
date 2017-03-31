$.fn.slideshow = function(options) {
  var config = $.extend({}, {
    element: '.js-slideshow',
    autoPlay: true,
    interval: 2000,
    activeIndex: 0
  }, options);

  function Slides() {
    this.isPause = false;
    this.activeIndex = config.activeIndex;
    this.$slideshow = $(config.element);
    this.$slideItems = this.$slideshow.find('.js-slide-item');
    this.$controlItems = this.$slideshow.find('.js-control-item');
    this.count = this.$slideItems.length;
  }

  Slides.prototype = {
    init: function() {
      var _this = this;

      //set active item
      $(this.$slideItems[this.activeIndex]).addClass('active');
      $(this.$controlItems[this.activeIndex]).addClass('active');

      //bind events
      $(this.$slideshow).on('mouseover mouseout', function(e) {
        _this.isPause = (e.type === 'mouseover' ? true : false);
      });

      $(this.$slideshow).on('mouseover mouseout', '.js-control-item', function(e) {
        var index = $(this).index();
        _this.setActiveItem(index);
      });

      if (config.autoPlay) {
        setInterval(function() {
          _this.goNext();
        }, config.interval);
      }
    },
    setActiveItem: function(index) {
      $(this.$slideItems[this.activeIndex]).removeClass('active');
      $(this.$controlItems[this.activeIndex]).removeClass('active');

      this.activeIndex = index;

      $(this.$slideItems[this.activeIndex]).addClass('active');
      $(this.$controlItems[this.activeIndex]).addClass('active');
    },
    goNext: function() {
      if (!this.isPause) {
        $(this.$slideItems[this.activeIndex]).removeClass('active');
        $(this.$controlItems[this.activeIndex]).removeClass('active');

        this.activeIndex++;

        if (this.activeIndex >= this.count) {
          this.activeIndex = 0;
        }

        $(this.$slideItems[this.activeIndex]).addClass('active');
        $(this.$controlItems[this.activeIndex]).addClass('active');
      }
    }
  };

  return new Slides();
}