$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const celebrityInput = $("#celebrity").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".celebrity").text(celebrityInput);
   
    $("#Celebrity-toothpicks-for-sale").show();

    $("#name").val('');
    $("#address").val('');
    $("#celebrity").val('');

    event.preventDefault();
  })
})