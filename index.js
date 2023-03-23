

function numberGenerator() {

    // Generating Random number for Player 1 
    var random1 = Math.random();
    random1 = Math.floor(random1 * 6) + 1;


    // Random Selector for dice
    document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");


    // Generating Random number for Player 2
    var random2 = Math.random();
    random2 = Math.floor(random2 * 6) + 1;


    // Random Selector for dice
    document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png");


    // Setting the conditions

    if (random1 > random2) {
        document.querySelector("h1").innerText = ("Player 1 Wins!");
    }
    else if (random1 === random2) {
        document.querySelector("h1").innerText = ("Draw! ⚔️");
    }
    else {
        document.querySelector("h1").innerText = ("Player 2 Wins!");
    }
}