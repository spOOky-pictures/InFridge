


//makes drink card  gives it card class so bootstrap treats it as card component
var drinkCard = $("<div class=card>");
// drinkCard.addClass("col-lg-2 col-sm-12");
//assign id of drink-card for css styling
drinkCard.attr("id","drink-card")
//append drink card to aside content
$('#drinks-card').append(drinkCard)
//create drink card body this is where snippet descripton will go of the drink will go
var drinkCardBody = $('<div class= card-body>');
//append card body to main drink card
drinkCard.append(drinkCardBody);
var drinkTitle = $('<h3 class=card-title>');
drinkTitle.html("Click The Button Below to Grab A Drink Recipe");
drinkCardBody.append(drinkTitle)

var drinkDescription = $('<p class=card-text>');
drinkDescription.html(" ");
drinkCardBody.append(drinkDescription);
var drinkGenBtn = $('<a class=btn>').addClass("btn-success");
drinkGenBtn.html("Generate Another Drink");
drinkGenBtn.attr("id","gen-drink");


drinkCardBody.append(drinkGenBtn)

  
// .on("click") function associated with the drink button
$(".btn-success").on("click", function(event) {
    event.preventDefault();
 
 
    // Constructing an URL for the Cocktails API
    const settings = {
       "async": true,
       "crossDomain": true,
       "url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails?offset=4&limit=20",
       "method": "GET",
       "headers": {
          "X-RapidAPI-Key": "a3e58689c4msh05163be274f5a0fp1e482cjsn52c38c025a06",
          "X-RapidAPI-Host": "drinks-digital1.p.rapidapi.com"
       }
    };
 
    $.ajax(settings).done(function (response) {
       var results = response.data;
 
       console.log(response);
 
       var item = response[Math.floor(Math.random() * response.length)];
       console.log(item);
       var title = item.cocktail_name;
       var description = item.description;
 
       drinkTitle.html(" ");
       drinkDescription.html(" ");
       drinkTitle.append(title);
       drinkDescription.append(description);
    });
  })
 