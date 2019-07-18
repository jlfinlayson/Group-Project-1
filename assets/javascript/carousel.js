//DOG TOYS
function callEtsy() {
    api_key = "tunvbvzkqlqud5kkqfrvjyuk";
    terms = "dog toys"
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
        terms + "&limit=15&includes=Images:1&api_key=" + api_key;
    // $('<p></p>').text('Searching for ' + terms).appendTo('#dogToys');
    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.ok) {
                $('#dogToys').empty();
                if (data.count > 0) {
                    $.each(data.results, function (i, item) {
                        // HERE IS WHERE YOU ADD IN YOUR CAROSEL LOAD

                        var contain = $("#containTwo");

                        //div class row
                        var rowDiv = $("<div>").addClass("row");

                        // contain.append(rowDiv);
                        console.log("row div created");

                        //div class row_inner
                        var rowInnerDiv = $("<div>").addClass("row_inner");

                        // rowDiv.append(rowInnerDiv);
                        console.log("row inner div created");

                        //div class title
                        var titleDiv = $("<div>").addClass("tile");

                        // rowInnerDiv.append(titleDiv);
                        console.log("title div created");

                        //div class title_media
                        var titleMediaDiv = $("<div>").addClass("tile_media");

                        // titleDiv.append(title_media);
                        console.log("title media div created");

                        //div class title_img
                        var titleImgDiv = $('<a href="' + item.url + '"><img class="tile_img" src="' + item.Images[0].url_170x135 + '"></a>');

                        // var titleImgDiv = $("<img>").addClass("tile_img").attr("src", item.Images[0].url_170x135);
                        //     titleImgDiv.wrap($(".title_image <a href=" + item.url + "></a>").attr("target", "_blank"));
                        // prepend it all above last
                        titleMediaDiv.append(titleImgDiv);
                        titleDiv.append(titleMediaDiv);

                        contain.append(titleDiv);

                        if (i % 4 == 3) {
                            $('<br/>').appendTo('#dogToys');
                        }
                    })
                } else {
                    $('<p>No results.</p>').appendTo('#dogToys');
                }
            } else {
                $('#dogToys').empty();
                alert(data.error);
            }
        }
    });
    return false;
}

window.onload = callEtsy();

// DOG BEDS
function callEtsyTwo() {
    api_key = "tunvbvzkqlqud5kkqfrvjyuk";
    terms = "dog beds"
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
        terms + "&limit=15&includes=Images:1&api_key=" + api_key;
    $('<p></p>').text('Searching for ' + terms).append('#dogBeds');
    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.ok) {
                $('#dogBeds').empty();
                if (data.count > 0) {
                    $.each(data.results, function (i, item) {
                        // HERE IS WHERE YOU ADD IN YOUR CAROSEL LOAD
                        var contain = $("#containThree");

                        //div class row
                        var rowDiv = $("<div>").addClass("row");

                        // contain.append(rowDiv);
                        console.log("row div created");

                        //div class row_inner
                        var rowInnerDiv = $("<div>").addClass("row_inner");

                        // rowDiv.append(rowInnerDiv);
                        console.log("row inner div created");

                        //div class title
                        var titleDiv = $("<div>").addClass("tile");

                        // rowInnerDiv.append(titleDiv);
                        console.log("title div created");

                        //div class title_media
                        var titleMediaDiv = $("<div>").addClass("tile_media");

                        // titleDiv.append(title_media);
                        console.log("title media div created");

                        //div class title_img
                        // var titleImgDiv = $("<img>").addClass("tile_img").attr("src", item.Images[0].url_170x135);

                        var titleImgDiv = $('<a href="' + item.url + '"><img class="tile_img" src="' + item.Images[0].url_170x135 + '"></a>');
                        // prepend it all above last
                        titleMediaDiv.append(titleImgDiv);
                        titleDiv.append(titleMediaDiv);

                        contain.append(titleDiv);

                        if (i % 4 == 3) {
                            $('<br/>').appendTo('#dogBeds');
                        }
                    })
                } else {
                    $('<p>No results.</p>').appendTo('#dogBeds');
                }
            } else {
                $('#dogBeds').empty();
                alert(data.error);
            }
        }
    });
    return false;
    console.log(data)
}
window.onload = callEtsyTwo();

// DOG TREATS
function callEtsyThree() {
    api_key = "tunvbvzkqlqud5kkqfrvjyuk";
    terms = "dog treats"
    etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
        terms + "&limit=15&includes=Images:1&api_key=" + api_key;
    $('<p></p>').text('Searching for ' + terms).append('#dogTreats');
    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if (data.ok) {
                $('#dogTreats').empty();
                if (data.count > 0) {
                    $.each(data.results, function (i, item) {
                        // HERE IS WHERE YOU ADD IN YOUR CAROSEL LOAD
                        var contain = $("#containFour");

                        //div class row
                        var rowDiv = $("<div>").addClass("row");

                        // contain.append(rowDiv);
                        console.log("row div created");

                        //div class row_inner
                        var rowInnerDiv = $("<div>").addClass("row_inner");

                        // rowDiv.append(rowInnerDiv);
                        console.log("row inner div created");

                        //div class title
                        var titleDiv = $("<div>").addClass("tile");

                        // rowInnerDiv.append(titleDiv);
                        console.log("title div created");

                        //div class title_media
                        var titleMediaDiv = $("<div>").addClass("tile_media");

                        // titleDiv.append(title_media);
                        console.log("title media div created");

                        //div class title_img
                        // var titleImgDiv = $("<img>").addClass("tile_img").attr("src", item.Images[0].url_170x135);
                        var titleImgDiv = $('<a href="' + item.url + '"><img class="tile_img" src="' + item.Images[0].url_170x135 + '"></a>');

                        titleMediaDiv.append(titleImgDiv);
                        titleDiv.append(titleMediaDiv);

                        contain.append(titleDiv);

                        if (i % 4 == 3) {
                            $('<br/>').appendTo('#dogTreats');
                        }
                    })
                } else {
                    $('<p>No results.</p>').appendTo('#dogTreats');
                }
            } else {
                $('#dogTreats').empty();
                alert(data.error);
            }
        }
    });
    return false;
    console.log(data)
}
window.onload = callEtsyThree();

// SEARCH ITEMS
$(document).ready(function () {
    $('#etsy-search').bind('submit', function () {
        api_key = "tunvbvzkqlqud5kkqfrvjyuk";
        terms = $('#etsy-terms').val();
        etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
            terms + "&limit=15&includes=Images:1&api_key=" + api_key;
        $('<p></p>').text('Searching for ' + terms).append('#etsy-images');
        $.ajax({
            url: etsyURL,
            dataType: 'jsonp',
            success: function (data) {
                console.log('This is the new data: ' + data)
                if (data.ok) {
                    $('#etsy-images').empty();
                    if (data.count > 0) {
                        $.each(data.results, function (i, item) {
                            var contain = $("#containNewSearch");

                            //div class row
                            var rowDiv = $("<div>").addClass("row");

                            // contain.append(rowDiv);
                            console.log("row div created");

                            //div class row_inner
                            var rowInnerDiv = $("<div>").addClass("row_inner");

                            // rowDiv.append(rowInnerDiv);
                            console.log("row inner div created");

                            //div class title
                            var titleDiv = $("<div>").addClass("tile");

                            // rowInnerDiv.append(titleDiv);
                            console.log("title div created");

                            //div class title_media
                            var titleMediaDiv = $("<div>").addClass("tile_media");

                            // titleDiv.append(title_media);
                            console.log("title media div created");

                            //div class title_img
                            // var titleImgDiv = $("<img>").addClass("tile_img").attr("src", item.Images[0].url_170x135)
                            var titleImgDiv = $('<a href="' + item.url + '"><img class="tile_img" src="' + item.Images[0].url_170x135 + '"></a>');

                            // prepend it all above last
                            titleMediaDiv.append(titleImgDiv);
                            titleDiv.append(titleMediaDiv);

                            contain.append(titleDiv);

                            $("#searchTitle").text(terms);
                            
                            if (i % 4 == 3) {
                                $('<br/>').appendTo('#etsy-images');
                            }
                        });
                    } else {
                        $('<p>No results.</p>').appendTo('#etsy-images');
                    }
                } else {
                    $('#etsy-images').empty();
                    alert(data.error);
                }
            }
        });

        return false;
    })
});


