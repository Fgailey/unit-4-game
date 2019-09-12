//variables

//this will be the fighter for the course of the game
var fighterSelected = {
    charHealth: Number,
    charAttack: Number,
};
var defenderSelection = {
    defHealth: Number,
    defAttack: Number,
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
            var fighter = $("<img>");
            fighter.addClass("chosenFighter");
            fighter.attr("src", $(this).attr('src'));
            fighter.attr("value", $(this).attr('value'))
            $("#fighting").append(fighter);
            $(this).fadeOut();

            //need to make an object for the character chosen
            fighterSelected.charHealth = $(this).attr("data-health");
            fighterSelected.charAttack = $(this).attr("data-attack");
            
            console.log(fighterSelected.charHealth);
            console.log(fighterSelected.charAttack);
            
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
        $(".fighters").fadeIn();
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