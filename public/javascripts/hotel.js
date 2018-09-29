
 hotel = [];
 hotel.database = {};
  const loadAssets = function() {
    $.getJSON("/hotel", function(data) {
      hotel.database = data;
      hotel.init();
    });
  };
  

  hotel.init = function() {
    hotel.del();
    hotel.upd();
    hotel.addR();
    hotel.generateMarkup();
  };
  
  hotel.addR = function() {
    $(".addR").on("click", function() {
      $("#addR").show();
      window.location = "/addhotel";
    });
  };
  
  hotel.del = function() {
    $(".del").on("click", function() {
      //  console.log(id._id);
      url = "/hotel/" + id._id;
      //  console.log(url);
      $.post({
        url: url,
        method: "DELETE"
      });
      window.location = "/hotel";
    });
  };
  
  hotel.upd = function() {
    $(".update").on("click", function(e) {
      e.preventDefault();
      $("#addr2").show();
      $("#addr2").submit(function(e) {
        e.preventDefault();
        //    console.log(id._id);
        $.post({
          url: "/hotel/" + id._id,
          type: "PUT",
          data: {
            jobName: $("#id1").val(),
            jobWebsite: $("#id2").val(),
            jobLocation: $("#id3").val()
          }
        });
        window.location = "/hotel";
      });
    });
  };
  
  hotel.generateMarkup = function() {
    var template = "";
  
    template +=
      '<div href="/addHotel" class="addR btn btn-primary"> <button>Add hotel</button></div>';
  
    $.each(hotel.database, function(index) {
      db = hotel.database;
      id = db[index];
    //   console.log(id);
    // template += '<div class="container">';
    template += '<div class="card" style="width: 25rem;">';
    template +=
      '<img class="card-img-top" src="' + id.hotelImage + '"></img>';
    template += '<div class="card-body">';
    template += '<h3 class="card-title">' + id.hotelName + "</h3>";
    template +='<h5 class="fas fa-map-marker-alt">' + id.hotelCity + "</h5>";
    template += '<p  class="card-text">' + id.hotelAddress + "</p><br>";
    template +='<div id="hide">'
    template += '<button class="del btn btn-primary">Delete</button>';
    template += '<button class="update btn btn-primary">Edit Detials</button>';
    template += "</div>";

    // template += "</div>";
    template += "</div>";
    template += "</div>";

    });
    $(".content").append(template);
    hotel.del();
    hotel.upd();
    hotel.addR();
  };
  // on click
  
  loadAssets();
  