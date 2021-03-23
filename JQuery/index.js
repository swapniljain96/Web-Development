// $() is equal to JQuery()


$(document).ready(function(){
   $("h1").css("color","red")  this will run only if JQuery CDN is ready
});

console.log($("h1").css("color")); // this will display the value of the property
console.log($("h1").css("font-size")); //--
//  if we have 1 property in it then we getting the value of it
// //  if we have 2 property in it then we setting the value for it
$("h1").css("color", "red"); //this is will work if JQuery cdn is inside the body but in last



// to add the class on the go
$("h1").addClass("big margin");

// to remove the class on the go
// $("h1").removeClass("big");

// to check if tag has that class or not
console.log($("h1").hasClass("big"));

//to add the text in the element
$("h1").text("new text");
$("button").text("Submit");

//to add the innerHTML text in the element
$("button").html("<em>Hey</em>")


//Manipulating Attributes
console.log($("img").attr("src"));
$("a").attr("href", "www.facebook.com");
console.log($("a").attr("href"));
// here class of a tag is also a Attribute
$("h1").attr("class");


// Adding Event Listener to single element
$("h1").click(function() {
  $("h1").css("color", "blue");
});

// Adding Event Listener to multiple element of same class
$("button").click(function() {
  $("h1").css("color", "green");
});
// it automatically bind all the button with that class name without repeating

// add event Listener in input tag to check with key pressed
$("input").keypress(function(e) {
  console.log(e.key);
});

$(document).keypress(function(e) {
  $("h1").text(e.key);
});

// to assign an event Listener we can use on in that element
// Types of Events are https://developer.mozilla.org/en-US/docs/Web/Events
$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});

// Add or Remove elements on the fly
// before
$("h1").before("<button>Before button</button>");
// <button>Before button</button> <h1>Hello</h1>

// after
$("h1").after("<button>after button</button>");
// <h1>Hello</h1> <button>after button</button>

// prepend
$("h1").prepend("<button>prepend button</button>");
// <h1> <button>prepend button</button> Hello </h1>

// append
$("h1").append("<button>append button</button>");
// <h1> Hello <button>append button</button> </h1>

// to remove all of the elements at once
// $("button").remove(); // remove() is a method that removes all the element of the type


// Animation with JQuery

$("button").click(function() {
  // $("h1").hide();  // hide() is a method that hide the specified element
  // $("h1").show();  // show() is a method that show the specified element
  // $("h1").toggle();  // toggle() is a method that show/hide(vice-versa) the specified element
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp(); //  slideUp() just collapse the content to up
  // $("h1").slideDown(); //  slideDown() just collapse the content to down
  // $("h1").animate({opacity:0.5}); // we can only specify the property which are having numerical values

  //to chain up the animate
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
