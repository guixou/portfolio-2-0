'use strict';



document.addEventListener('DOMContentLoaded', function () {
    
  var grid = document.querySelector('.grid');

  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });
});