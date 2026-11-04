
// A says
let messagesA=["How are you doing", "Sorry to hear that", "What color would you like it to be", "SO pick one"];
let counterA=0
//B says
let messagesB=["Terrible", "The color of the background sucks", "Not this one",];
let counterB=0

//whenn A is clicked
//A speaks when counterA = counterB
$("#character-a").click( function(){

    if (counterA == 3){
        $("#answers").css("display","flex");
        $("#chat").append("<p>Jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }

     else if (counterA == counterB) && {
     $("#chat").append("<p>Jake: " + messages[counterA] + "</p>");
     counterA = counterA + 1
    }



});

//when B is clicked
//B speaks when counterB < counter A
$("#character-b").click( function(){

    if (counterB < counterA) {
        $("#chat").append("<p>Finn: " + messagesB[counterB] + "</p>");
     counterB=counterB + 1;
    }

});

//if counterB > 3 then show the buttons