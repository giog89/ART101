let following = false;

$("#creature").click(function(){
    //this means when #creature is clicked, run the code inside the curly brackets
    //$("selector").event(function(){
    // });
    $(this).toggleClass("transformed");
    //$(this) means the specific element that received the event (in this case: the creature that was clicked)
    //.toggleClass("transformed") means add the transforme dlcass if it is not there, remove the transformed class if it is already there
    $("#status").text("The creature changed shape.");
});

$("#creature").hover(
    function () {
        $("#thought").stop(true, true).slideDown(300);
        //slideDown(300) means show this element with a sliding animatoin over 300 milliseconds
        //.stop(true,true) prevents old animations from stacking up if you move the mouse in and out quickly
        $("#status").text("The creature revealed a thought.");
    },
    function () {
        $("#thought").stop(true, true).slideUp(300);
        //.slideUp(300) hides the thought bubble with animation
        $("#status").text("The thought disappeared.");
    }
);

//this means when a key is pressed anywhere on the page, run this function
//we use $(document) because the keyboard event belongs to the whole page, not just the creature
$(document).keydown(function (event){
    
    if (event.key === " " || event.code === "Space") {
    //this checks whether the pressed key is Space
    //the double vertical lines mean: or
    //so the line means: if the key is "" OR the code is "Space"
        event.preventDefault();
        //this prevents Space from doing its usual browser behavior, such as scrolling the page

        following = !following;
        //this line switches the value to its opposite
        //if following is false, it becomes ture. if following is true it becomes false
        //this is our on/off switch
        $("#creature").toggleClass("following");
        //now pressing Space also turns the following class on and off
        if (following === true) {
            $("#status").text("The creature is following your cursor.");
        } else {
            $("#status").text("The creature stopped following you.");
        }
    }
});

//this means when the mouse moves anywhere on the page, run this function
//keyboard event and mouse movement event are two seperate events, they communicate through the variable: let following = false;
//Space tells the page: “following is now on/off.” Mousemove asks: “is following on right now?” If yes, the creature moves. If no, nothing happens.
$(document).mousemove(function(event) {
    if (following === true){
        $("#creature").css({
            left: event.pageX - $("#scene").offset().left + 30,
            top: event.pageY - $("#scene").offset().top + 30
            //this changes the creature's left and top position
            //event.pageX gives the mouse's horizontal position. event.pageY gives the mouse's vertical position
            //$("#scene").offset().left and $("#scene").offset().top help place the creature correctly inside the scene, not just inside the whole browser page.
            //The + 30 keeps the creature slightly away from the cursor, so it does not sit directly under the mouse.
        });
    }
});