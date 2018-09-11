$(document) .ready(function(){
  $("blanks form").submit(function(){
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var zipcodeInput = $("input#zipcode").val();

    $(".name").text("nameInput");
    $(".address").text("addressInput");
    $(".zipcode").text("zipcodeInput");

    $("#blanks") .hide();
    $("#reciept").show();

  event.preventDefault();
  });
});
