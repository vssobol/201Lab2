//use strict;

// var likesGOT = prompt("Do you like Game of Thrones?");

// likesGOT = likesGOT.toLowerCase();

// if(likesGOT === "yes"){
//     alert("Cool!");
// } else if(likesGOT === "no"){
//     alert("That's too bad.");
// } else{
//     alert("I don't recognize that answer.")
// }

var pet = prompt("Do you have a pet?");

pet = pet.toLowerCase();

if(pet === "yes"){
    pet = prompt("Awesome! What's their name?");

    if(pet.toLowerCase() === "lili"){
        alert("That's my cats name too!")
    } else{
        alert("That's a great name. Tell " + pet + " that I love them.");
    }
} else{
    alert("That's too bad.");
}