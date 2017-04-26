$(function () {
  $("#survey-form").submit(function (event) {
    var responder = {
      name:  $("#name").val(),
      age:   $("#age").val(),
      food:  $("input:radio[name=food]:checked").val(),
      music: $("#music").val()
    }
    console.log(event);
    console.log(responder);
    event.preventDefault();
  });
})
