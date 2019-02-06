$(document).ready(function() {
  $(".btn-drink").on("click", function(event) {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/burgers/update/" + id, {
      type: "PUT",
      data: {devoured:true}
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
