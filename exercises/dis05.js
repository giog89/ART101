let kaya = {
    name: "kaya",
    age: 2
};


// TODO 1: write a function called describe that takes one parameter, outfit,
// and RETURNS a sentence about Kaya for that outfit:
//    "witch"    ->  kaya is casting evil spells on u...
//    "scarf"    ->  kaya is comfymaxxing<3
//    "harness"  ->  kaya is (pretending to be) ready for a walk!
//    "cone"     ->  kaya is in jail.
// (hint: use if / else if / else, use kaya.name instead of typing "kaya", and return the sentence)

function describe(outfit){
    let message = ""
    if (outfit == "witch") {
        message = kaya.name + "<p> is casting evil spells on u...</p>";
    }
    else if (outfit == "scarf") {
        message = kaya.name + "<p> is comfymaxxing<3</p>";
    }
    else if (outfit == "harness") {
        message = kaya.name + "<p> is (pretending to be) ready for a walk!</p>";
    }
    else if (outift == "cone") {
        message = kaya.name + "<p> is in jail.</p>";
    }
    return message
};

   
// TODO 2: write a function called showKaya that takes one parameter called outfit, and:
//    1. changes the photo:
//         $("#kaya-photo").attr("src", "images/kaya-" + outfit + ".jpg");
//    2. puts the sentence from describe(outfit) into #status
//    (hint: use .html(), and put describe(outfit) inside the ( ))

function showKaya(outfit){
    $("#kaya-photo").attr("src", "images/kaya-" + outfit + ".jpg");

    $("#status").html(describe(outfit))
}

// TODO 3: write ONE click handler for ALL the buttons with the class "outfit"
// that calls showKaya with the id of the button that was clicked
// (hint: this.id)



// TODO 4: call showKaya once, outside of any click, so the page starts on "scarf"



// STRETCH (done early?): make the "surprise me!" button show a random outfit
//    1. make an array:  let outfits = ["witch", "scarf", "harness", "cone"];
//    2. a random index:  Math.floor(Math.random() * outfits.length)
//    3. call showKaya with the outfit at that index 
//    4. EXTRA: make it so the random outfit is different than the current outfit
//       hint: save the current outfit in a variable inside showKaya. if the random pick
//       matches it, move to the next index instead (and wrap back to 0 at the end!)