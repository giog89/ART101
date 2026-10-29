//this funciton expects a color
function paintPage (color) {
    $("body").css( "background-color", color);
}

paintPage ("yellow");

//the clicker button program

//we create a varibale named "count", the initia; valus is 0

let count=-0;
let colorsCount=0;

//an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText=""

//we listen for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){

    count = count + 1;

    console.log (count);
    console.log (colors[colorsCount]);

    buttonText="Clicked " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html( buttonText );
    
    paintPage(colors[colorsCount]);
    //$("body").css( "background-color", colors[colorsCount] );

    //$("body").append("<img width='50' src='"+colors[colorsCount]  +".jpg'>")

    if( count >= 16 ) { $("#needy-button").after("<p>my mood is ... wild!</p>");} else if (count >= 13) { $("#needy-button").after("<p>my mood is ... really agitated</p>");} else if (count >= 5) { $("#needy-button").after("<p>my mood is ... agitated</p>");}
    
    colorsCount = colorsCount +1;
    
    if ( colorsCount >= 8 ) { colorsCount = 0; }


});

//$("#green").click( function (){
    console.log("green was clicked");
    paintPage("green");
});

//$("#orange").click( function (){
    console.log("orange was clicked");
    paintPage("orange");
});

//$("#mexp").click( function (){
    console.log("mexp was clicked");
    paintPage("#E4007C");
});



$(".color-circle").click(function)(){
    console.log("a circle was clicked");
    paintPage(this.id);
}