var len;
var results = '';

function apiSearch() {
    console.log("made it here");
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "cbf2489f528140ab98cc639bc67545fa");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
        }

        // document.getElementById('searchResults').innerHTML = results;

       $('#searchResults').html(results);

        console.log(results);

    })
    .fail(function () {
      alert("error");
    });
}

// ACTION ITEM #5
function displayTime() {

    function getTime() {
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

        document.getElementById('time').title = "Current Time";

        document.getElementById('time').innerHTML = html;
    }

    getTime();

        $("#time").dialog({
            width: 300,
            height: 150,
            show: {
                effect: "slide",
                duration: 0
            },
            hide: {
                effect: "slide",
                duration: 750
            }
        });
}


// ACTION ITEM #13
function iSearch() {
    apiSearch();
    function pullResults() {
        $('#searchResults').dialog({
            width: 500,
            height: 500,
            show: {
                effect: "slide",
                duration: 1000
            },
            hide: {
                effect: "slide",
                duration: 750
            }
        });
    }
    pullResults();
}
