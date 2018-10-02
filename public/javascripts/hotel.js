

 hotel = [];
 hotel.database = {};
 var loadAssets = function() {
    $.getJSON("/hotel/", function(data) {
      
      hotel.database = data;
      hotel.init();
    });
  };
  

  hotel.init = function() {
    hotel.del();
    hotel.update();
    hotel.addR();
    hotel.generateMarkup();
  };
  
  hotel.addR = function() {
    $(".addR").on("click", function() {
      // $("#addR").show();
      window.location = "/addHotel";
    });
  };
  hotel.update =function (){
    $(" .update").on ("click", function(e){
      e.preventDefault();
      
            $("#updateContainer").show();
      $("#adding2").submit(function(e){
        e.preventDefault();
   
        $.post({
          url : "/hotel/" + id._id,
          type: "PUT",
          data : {
              hotelImage :$("#hotelImage").val(),
              hotelCity : $("#hotelCity").val(),
              hotelName : $("#hotelName").val(),
              hotelAddress :$("#hotelAddress").val(),
              hotelContact : $ ("#hotelContact").val()

          }
        });
        window.location = "/home"
      });


    });
  };
  hotel.del = function() {
    $(".del").on("click", function() {
       console.log(id._id);
      url = "/hotel/" + id._id;
      //  console.log(url);
      $.post({
        url: url,
        method: "DELETE"
      });
      window.location = "/home";
    });
  };
  

  
  hotel.generateMarkup = function() {
    var template = "";
    
   
  
    $.each(hotel.database, function(index) {
      db = hotel.database;
      id = db[index];
    //   console.log(id);
    template += '<div data-id="'+id._id+'">';

    template += '<div class="card" style="width: 25rem;">';
    template +=
      '<img class="card-img-top" src="' + id.hotelImage + '"></img>';
    template += '<div class="card-body">';
    template +='<h5 class="fas fa-map-marker-alt">' + id.hotelCity + "</h5>";
    template += '<h3 class="card-title">' + id.hotelName + "</h3>";
    template += '<p  class="card-text">' + id.hotelAddress + "</p><br>";
    template += '<p  class="card-text">' + id.hotelContact + "</p><br>";
    template +='<div id="hide">'
    template += '<div>'
    template += '<button  class="del btn btn-primary">Delete</button>';
    template += '</div>'
    template += '<button class="update btn btn-primary  ">Edit Detials</button>';
    template += "</div>";

    template += "</div>";
    template += "</div>";
    template += "</div>";

    });
    $(".content").append(template);
    hotel.del();
    hotel.update();
    hotel.addR();
  };
  // on click
  
  loadAssets();
  