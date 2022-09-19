var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'my-api-url' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "my-api-key");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset().top;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function () {
    parallax_height();
});
$(window).resize(function () {
    parallax_height();
});

// ACTION ITEM #5
function displayTime() {

    var html = "";

    var dt = new Date();

    var hour = dt.getHours();
    var minute = dt.getMinutes();

    var pod = "AM";

    if (hour > 12) {
        hour -= 12;
        pod = "PM";
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    html += hour + ':' + minute + " " + pod;

    document.getElementById('time').innerHTML = html;

}

