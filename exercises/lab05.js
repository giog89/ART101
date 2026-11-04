//function functionName() {
    // actions go here
//}

function askNumber(whatNumber) {
    let userNumber = prompt ("Guess 1-10?");

    if (userNumber == whatNumber){
        //if (condition) { 
            // action goes here }
        $("#output").html("You got it!");
    }
    else {
        //if (condition) {  
            //action if true}
        // else {
            // action if false}
        $("#output").html("Noooooope");
    }
}

$("#good-button").click(function (){
    askNumber(7);
});