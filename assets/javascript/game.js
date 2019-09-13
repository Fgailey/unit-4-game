//variables

//this will be the fighter for the course of the game
var fighterSelected = {
    charHealth: Number,
    charAttack: Number,
    charName: "",
};
var defenderSelected = {
    charHealth: Number,
    charAttack: Number,
    charName: "",
};


var fighterPicked = false;
var defenderPicked = false;

// var enemyStats = [80, 90, 70, 100]
//this will start once the character has been chosen and display the enemy's
//this doesnt work cause I cant click on one of these



//when the defenders health drops below 0 
//defender fades out and allows for a new defender to be selected
//the stats should auto reset because of the defender on click function
function defenderDefeat(){

}

$(document).ready(function() {

    $("#attack").on("click", function(){
        if(defenderSelected.charHealth > 0){
            //damage to defender
            defenderSelected.charHealth -= fighterSelected.charAttack;
            //doubles fighters damage
            fighterSelected.charAttack += fighterSelected.charAttack;
            //defender counter attacks
            fighterSelected.charHealth -= defenderSelected.charAttack;

            $("#charAttack").html(fighterSelected.charAttack);
            $("#charHealth").html(fighterSelected.charHealth);
            console.log(fighterSelected.charAttack);
        
            
        }
        
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
            //$(".character").fadeTo("fast", 0.2);
            $(this).parent().fadeOut();

            // adds name to the chosen fighter
            var fighterName = $("<div>");
            fighterName.addClass("charName");
            fighterName.text($(this).attr("data-name"));
            fighterName.attr("id", "charName");
            $("#character").append(fighterName);

            //adds the attack attribute to the chosen fighter
            var fighterAttack = $("<div>");
            fighterAttack.addClass("charAttack");
            fighterAttack.text($(this).attr("data-attack"));
            fighterAttack.attr("id", "charAttack");
            $("#character").append(fighterAttack);

            //adds the health attribute
            var fighterHealth = $("<div>");
            fighterHealth.addClass("charHealth");
            fighterHealth.text($(this).attr("data-health"));
            fighterHealth.attr("id", "charHealth");
            $("#character").append(fighterHealth);

            //need to make an object for the character chosen
            fighterSelected.charHealth = parseInt($(this).attr("data-health"));
            fighterSelected.charAttack = parseInt($(this).attr("data-attack"));
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
            
            var defender = $("<img>");
            defender.addClass("defendingEnemy");
            defender.attr("src", $(this).attr('src'));
            defender.attr("value", $(this).attr('value'));
            $("#defender").append(defender);
            $(this).fadeOut();
            
            //assigns stats to the object
            defenderSelected.charHealth = parseInt($(this).attr("data-health"));
            defenderSelected.charAttack = parseInt($(this).attr("data-attack"));
            defenderSelected.charName = $(this).attr("data-name");
            console.log(defenderSelected.charName);

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