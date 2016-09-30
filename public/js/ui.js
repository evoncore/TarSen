
var doc = document;

(() => {
  var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
  };

  domReady(() => {
    // var header = document.querySelector('header');
    // document.body.style.paddingLeft = header.clientWidth + 30 +  'px';
  });

})();