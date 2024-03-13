function searchBandsInTown(artist) {
  // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Printing the entire object to console
      console.log(data);

      // Constructing HTML containing the artist information
      var artistName = $("<h1>").text(data.name);
      var artistURL = $("<a>").attr("href", data.url).append(artistName);
      var artistImage = $("<img>").attr("src", data.thumb_url);
      var trackerCount = $("<h2>").text(data.tracker_count + " fans tracking this artist");
      var upcomingEvents = $("<h2>").text(data.upcoming_event_count + " upcoming events");
      var goToArtist = $("<a>").attr("href", data.url).text("See Tour Dates");

      // Empty the contents of the artist-div, append the new artist content
      $("#artist-div").empty();
      $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputArtist = $("#artist-input").val().trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBandsInTown(inputArtist);
});
