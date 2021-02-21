// jquerify.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {
  if (!window.jQuery) {
    var dollarInUse = !!window.$;
    var s = document.createElement("script");
    // omit the version completely to get the latest one
    s.setAttribute("src", "//cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js");
    s.addEventListener("load", function () {
      console.log("jQuery loaded!");

      if (dollarInUse) {
        jQuery.noConflict();
        console.log("`$` already in use; use `jQuery`");
      }
    });

    document.body.appendChild(s);
  }
})();
