
// set up array
var dogBreeds = ["bulldog", "labrador retriever", "poodle", "pug", "beagle", "chihuahua", "german shepherd", "golden retriever"];
console.log(dogBreeds);

function renderbuttons() {
    $("#dogs").empty()
    for (var i = 0; i < dogBreeds.length; i++) {
        $("#dogs").append(`<button type="button" class="btn btn-danger dogBreed enterDog" data-id=${i}> ${dogBreeds[i]}</button>`)
        console.log("try these: "+ dogBreeds[i]);
    }
}

// start function
$(document).on("click", ".dogBreed", function () {
    var index = parseInt($(this).attr("data-id"));
    console.log("button clicked: ", index)
    var dogs = dogBreeds[index];
    console.log(dogs);
    console.log("button clicked: ", dogs)

    // petfinder API key
    var apiKey = "Lz4dG5pFxkgJKM8QvScIR8r67gxl5pFJY516qNDMjX3bCcWfpt"
    var secret="TFh3xWUu7tQdnQTjU1HTClSqG5gh0qXBMiKo09b0"
    var queryURL="https://api.petfinder.com/v2/animals"

    queryURL = queryURL + "breed=" + dogBreeds + "api_key=" + apiKey + "&limit=10";
    console.log(dogs);
    // AJAX function
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++)
                var imageDiv = $("<div class=dogImages>");
            var dogTypes = results[i].dogTypes;
            var p = $("<p class=dogTypes>").text("dogTypes: " + dogTypes)
            var show = $("<img>");
            // show.attr("src", results[i].)
            imageDiv.append(p);
            imageDiv.append(show);
            $("available dogs here").prepend(imageDiv);
        })
});
renderbuttons();
