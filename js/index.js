$(document).ready(function() {
  $("#quoteBtn").on("click", function() {
    //Classica chiamata AJAX
    $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com",
      success: function(data) {
        var r = JSON.parse(data);
        $("#quoteTxt").html("");
        $("#quoteTxt").append(r.quote);
      }
    });
  });
});
