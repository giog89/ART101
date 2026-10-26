let count = 0;

let buttonCreature = {
    name: "Peep",
    species: "Peep Bunny Plushie",
    favoriteFood: "pressure",
    moods: ["sleepy", "soft", "comforting", "cozy", "lovey", "mellow"]
};

$("#needy-button").click(function () {
    
    count = count + 1;

    let arrayPosition = (count - 1) % buttonCreature.moods.length;

    let currentMood = buttonCreature.moods[arrayPosition];

    //let message = "My current mood is " + currentMood;

    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";

    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

    //if (currentMood >=4) {currentMood = 0;}

});