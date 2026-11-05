let environmentTitle = "Garden Choice";

let environmentElements = ["ladybug","caterpillar","butterfly"]

let mainEntity = {
  name: "You",
  type: "person",
  mood: "curious",
  isChoosing: true,
  favoriteElement: ["ladybug","caterpillar","butterfly"]
};

$(".environment-button").click(function(){

    let choice = $(this).attr("id").replace("-button","");

    $("#environment-output").text("You chose the " + choice + "!");

});

let day = "gar.gif";
let sunset = "sunset.gif";
let night = "night.gif";


$("#background-button").click(function() {

    let backgroundChoice = prompt("What time of day do you want? Type either day, sunset, or night?");

    if (backgroundChoice == "day") {
        $("body").css("background-image", "url('gar.gif')");
    }
    else if (backgroundChoice == "sunset") {
        $("body").css("background-image", "url('sunset.gif')");
    }
    else if (backgroundChoice == "night") {
        $("body").css("background-image", "url('night.gif')");
    }
    else {
        alert("Please only enter either day, sunset, or night!");
    }
});