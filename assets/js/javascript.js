Start
Giphy Subjects-Inital Buttons
(function() {
});

// Initial critters array
      var critters = ["Ape", "Eel", "Iguana", "Otter", "Sea Urchin", "Yak"];

// displayCritterInfo function re-renders the HTML to display the appropriate content
      function displayCritterInfo() {

        var critter = $(this).attr("data-name");
 		//from Giphy API  GITHub https://github.com/Giphy/GiphyAPI
 		//var queryURL = http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  ;

//AJAX call for the specific critter 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold new critter
          // Get Ratings data
          // Get ratings
          // Displaying the rating
          // Retrieving the URL for the image
          // Creating an element to hold the image
          // Appending the image



 // Function for displaying critter data -- use critter demo
      function renderButtons() {

        // Deleting the critters prior to adding new critters
        // (this is necessary otherwise you will have repeat buttons)
        // $("#buttons-view").empty();

        // Looping through the array of critters
        // for (var i = 0; i < critters.length; i++) {

          // Then dynamicaly generating buttons for each critter in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          // var a = $("<button>");
          // Adding a class of critter to our button
          // a.addClass("critterBtn");
          // Adding a data-attribute
          // a.attr("data-name", critters[i]);
          // Providing the initial button text
          // a.text(critters[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a critter button is clicked
      $("#add-critter").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var critter = $("#critter-input").val().trim();

        // Adding critter from the textbox to our array
        critters.push(critter);

        // Calling renderButtons which handles the processing of our critter array
        renderButtons();
        //atttr
        //values
        //returns
      });

      // Adding a click event listener to all elements with a class of "critter"
      $(document).on("click", ".critter", displaycritterInfo);

      // function for annimate and still functions of displayed critters
      // data converstion

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    </script>