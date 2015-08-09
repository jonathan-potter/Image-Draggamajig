'use strict'


  var activeImage;
  var isDragging = false
  var startingMouseLocation = {x: 0, y: 0};
  var originalImageLocation = {x: 0, y: 0};

  var applydelta = function (delta) {
    activeImage.css('top', originalImageLocation.y + delta.y)
    activeImage.css('left', originalImageLocation.x + delta.x)
  }

  var setOGImageLocation = function () {
    originalImageLocation = {
      x: parseInt(activeImage.css('left')),
      y: parseInt(activeImage.css('top'))
    }
  }

  $('img').mousedown(function (event) {
    event.preventDefault();
    activeImage = $(event.currentTarget);
    isDragging = true;
    startingMouseLocation = {x: event.clientX, y: event.clientY};
    setOGImageLocation();
  });

  $('img').mousemove(function (event) {
    event.preventDefault();
    if (isDragging) {
      var mouseLocation = {x: event.clientX, y: event.clientY};
      var mouseDelta = {
        x: mouseLocation.x - startingMouseLocation.x,
        y: mouseLocation.y - startingMouseLocation.y
      };
      applydelta(mouseDelta);
    }
  });

  $('img').mouseup(function () {
    event.preventDefault();
    isDragging = false;
  });

  $(window).keydown(function (event){
    event.preventDefault();
    var key = event.keyCode;
    var arrowDelta;

    switch(key) {
      case 37: // left
        arrowDelta = {x: -1, y: 0}
        break;
      case 38: // up
        arrowDelta = {x: 0, y: -1}
        break;
      case 39: // right
        arrowDelta = {x: 1, y: 0}
        break;
      case 40: // down
        arrowDelta = {x: 0, y: 1}
        break;
    }
    setOGImageLocation();
    applydelta(arrowDelta)
  });

