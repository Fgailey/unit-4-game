//variables

//this will be the fighter for the course of the game
var fighterSelected = {
    charHealth: Number,
    charAttack: Number,
    charName: "",
};
var defenderSelection = {
    defHealth: Number,
    defAttack: Number,
    defName: "",
};


var enemyStats = [80, 90, 70, 100]
var fighterPicked = false;
var defenderPicked = false;
//this will start once the character has been chosen and display the enemy's
//this doesnt work cause I cant click on one of these




$(document).ready(function() {

    $(".attack").on("click", function(){
         
    });

    //this creates a copy of the fighter in the fighting section with the value(hp) and fighting class.
    $(".fighters").on("click", function() {
        if (fighterPicked === false){
            //creates profile for fighter
            var fighterPort = $("<div>");
            fighterPort.addClass("character");
            fighterPort.attr("id", "character")
            $("#fighting").append(fighterPort);
            
            //adds img to chosen fighter
            var fighter = $("<img>");
            fighter.addClass("chosenFighter");
            fighter.attr("src", $(this).attr('src'));
            fighter.attr("value", $(this).attr('value'))
            $("#character").append(fighter);
            $(this).parent().fadeOut();

            // adds name to the chosen fighter
            var fighterName = $("<div>");
            fighterName.addClass("charName");
            fighterName.text($(this).attr("data-name"));
            $("#character").append(fighterName);

            //adds the attack attribute to the chosen fighter
            var fighterAttack = $("<div>");
            fighterAttack.addClass("charAttack");
            fighterAttack.text($(this).attr("data-attack"));
            $("#character").append(fighterAttack);

            //adds the health attribute
            var fighterHealth = $("<div>");
            fighterHealth.addClass("charHealth");
            fighterHealth.text($(this).attr("data-health"));
            $("#character").append(fighterHealth);

            //need to make an object for the character chosen
            fighterSelected.charHealth = $(this).attr("data-health");
            fighterSelected.charAttack = $(this).attr("data-attack");
            fighterSelected.charName = $(this).attr("data-name")
            
            console.log(fighterSelected.charHealth);
            console.log(fighterSelected.charAttack);
            console.log(fighterSelected.charName);

            
            //makes it so new fighter cant be picked until game over or reset
            fighterPicked = true;
        }
        //this will call on the enemy creation
        
        
    });
    //this picks the defending enemy
    $(".enemyFighter").on("click", function(){        
        //give a red glowing background in the class
        if (defenderPicked === false) {
            console.log("working");
            var defender = $("<img>");
            defender.addClass("defendingEnemy");
            defender.attr("src", $(this).attr('src'));
            defender.attr("value", $(this).attr('value'));
            $("#defender").append(defender);
            $(this).fadeOut();
            
            defenderPicked = true;
        }
    });


    $("#reset").on("click", function() {
        console.log("reset");
        $("#fighting").empty();
        $("#defender").empty();
        $(".character").fadeIn();
        $(".enemyFighter").fadeIn();

        defenderPicked = false;
        fighterPicked = false;
    });
    
});


//var enemySelect = ["./assets/images/Shelob.jpg", "./assets/images/Witch_King.png", "./assets/images/Lurtz.jpg", "./assets/images/balrog.jpg"];


// function enemyCreation(){
//         if ($(".enemies").text() === ""){
//             for (var i = 0; i < 4; i++){


//                 //$(".enemies").html("<img src='./assets/images/Gandalf.jpg' class='enemyFighter' value='110' alt='Gandalf'></img>"); 

//                 // var newEnemy = $("<img>");
//                 // newEnemy.addClass("enemyFighter");
//                 // newEnemy.attr("src", enemySelect[i]);
//                 // newEnemy.attr("value", enemyStats[i]);
//                 // $(".enemies").append(newEnemy);
//             }
//         }
// }