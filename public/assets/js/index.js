$(document).ready(function() {
    
    $(".devour-form").on("submit", e => {
      e.preventDefault();
      
      let burger_id = $(this).children(".burger_id").val();
      console.log($(this).children(".burger_id").val());
      
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(data => {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  