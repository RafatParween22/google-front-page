document.getElementById("frmsearch").onsubmit = function() {
    window.location = "http://www.google.com/search?q=" + document.getElementById("txtsearch").value;
    return false;
  };
  