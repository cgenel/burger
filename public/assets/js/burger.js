// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".devour").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newDevour = $(this).data("newState");
    var devouredState = { 
      devoured: newDevour 
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("Burger devoured", devouredState);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $("#add-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
      })
  });

  $(".remove").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});