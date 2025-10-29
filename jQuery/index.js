// jquery("h1")

$("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").html("<em>Don't click me</em>");

//Manipulating Attributes

$("a").attr("href", "www.yahoo.com"); //set the attribute value

$("img").attr("src"); //get the attribute value

$("body").keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

$("h1").on("click", function() {
  $("h1").hide();
});

