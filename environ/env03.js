let environmentTitle = "Garden Choice";

let environmentElements = ["ladybug","caterpillar","butterfly"]

let mainEntity = {
  name: "You",
  type: "person",
  mood: "curious",
  isChoosing: true,
  favoriteElement: ["ladybug","caterpillar","butterfly"]
};

$("#ladybug-button").click(function() {
    $("#environment-output").text("You chose the " + environmentElements[0] + "!");
});

$("#caterpillar-button").click(function() {
    $("#environment-output").text("You chose the " + environmentElements[1] + "!");
});

$("#butterfly-button").click(function() {
    $("#environment-output").text("You chose the " + environmentElements[2] + "!");
});