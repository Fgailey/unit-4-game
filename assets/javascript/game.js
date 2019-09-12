//variables

//this will be the fighter for the course of the game
var fighterSelected
var enemySelect = ["./assets/images/Shelob.jpg", "./assets/images/Witch_King.png", "./assets/images/Lurtz.jpg", "./assets/images/balrog.jpg"];
var enemyStats = [80, 90, 70, 100]
var defenderSelection = [];

//this will start once the character has been chosen and display the enemy's
function enemyCreation(){
        if ($(".enemies").text() === ""){
            for (var i = 0; i < 4; i++){
                var newEnemy = $("<img>");
                newEnemy.addClass("enemyFighter");
                newEnemy.attr("src", enemySelect[i]);
                newEnemy.attr("value", enemyStats[i]);
                $(".enemies").append(newEnemy);
            }
        }
}

$(document).ready(function() {


    //this creates a copy of the fighter in the fighting section with the value(hp) and fighting class.
    $(".fighters").on("click", function() {

        var fighter = $("<img>");
        fighter.addClass("chosenFighter");
        fighter.attr("src", $(this).attr('src'));
        fighter.attr("value", $(this).attr('value'))
        $("#fighting").append(fighter);

        //this will call on the enemy creation
        enemyCreation();
        
    });

    $(".enemyFighter").on("click", function(){
        var defender = $("<img>");
        defender.addClass("defendingEnemy");
        defender.attr("src", $(this).attr('src'));
        defender.attr("value", $(this).attr('value'));
        $("#defender").append(defender);
    });


    $("#reset").on("click", function() {
        console.log("reset");
        $("#fighting").empty();
        $(".enemies").empty();

    });
    
});