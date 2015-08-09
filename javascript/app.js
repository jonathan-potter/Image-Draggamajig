'use strict'


  var activeImage;
  var startingMouseLocation = {x: 0, y: 0};
  var originalImageLocation = {x: 0, y: 0};

  $('img').mousedown(function (event) {
    event.preventDefault();
    activeImage = $(event.currentTarget);
    startingMouseLocation = {x: event.clientX, y: event.clientY};
    originalImageLocation = {
      x: parseInt(activeImage.css('left')),
      y: parseInt(activeImage.css('top'))
    }
  });

  $('img').mousemove(function (event) {
    event.preventDefault();
    if (activeImage) {
      var mouseLocation = {x: event.clientX, y: event.clientY};
      var mouseDelta = {
        x: mouseLocation.x - startingMouseLocation.x,
        y: mouseLocation.y - startingMouseLocation.y
      };

      activeImage.css('top', originalImageLocation.y + mouseDelta.y)
      activeImage.css('left', originalImageLocation.x + mouseDelta.x)
    }
  })

  $('img').mouseup(function () {
    event.preventDefault();
    activeImage = null;
  });

