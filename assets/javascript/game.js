//variables

//this will be the fighter for the course of the game
var fighterSelected = {
    charHealth: Number,
    charAttack: Number,
    charCounter: Number, 
    charName: "",
};
var defenderSelected = {
    charHealth: Number,
    charAttack: Number,
    charName: "",
};

var fighterPicked = false;
var defenderPicked = false;

var battle = false;

var fights = 0;

var music = true;
var minas = new Audio("./assets/sounds/minasMorgul.mp3");
var gate = new Audio("./assets/sounds/blackGate.mp3");

var aragonSound = new Audio("./assets/sounds/aragorn.mp3");
var legolasSound = new Audio("./assets/sounds/legolas.mp3");
var gimliSound = new Audio("./assets/sounds/gimli.mp3");
var gandolfSound = new Audio("./assets/sounds/gandalf.mp3");

var pass = new Audio("./assets/sounds/shallnotpass.mp3");


//-----------FUNCTIONS-------------------------------------

function enemyAppear(){
    $(".enemy").fadeIn();
    
}

//runs everytime defender health drops to or below 0
function defenderDefeat(){
    defenderPicked = false;
    defenderSelected.charHealth = 1;
    console.log("defeated");
    $("#defender").empty();
    $(".defendingEnemy").parent().fadeOut();
    battle = false;
    fights++;
    //triggers victory after 4th fight
    if (fights === 4){
        victory();
    }
}

//if all the enemy's are defeated
function victory(){
    $("#winLoss").html("<h1>VICTORY</h1>")
}


//if the chosen fighter is defeated
function fighterDefeat(){
    $(".chosenFighter").parent().fadeTo("slow", 0.15);
    minas.play();

    battle = false;  
}


//function to make sure right character sound gets called
function characterSound(){
    if(fighterSelected.charName === "Gandalf"){
        gandolfSound.play();
    }
    if(fighterSelected.charName === "Gimli"){
        gimliSound.play();
    }
    if(fighterSelected.charName === "Legolas"){
        legolasSound.play();
    }
    if(fighterSelected.charName === "Aragorn"){
        aragonSound.play();
    }
}

//if gandalf and balrog are selected
function shallNot(){
    if(fighterSelected.charName === "Gandalf"){
        if(defenderSelected.charName === "Balrog"){
            pass.play();
        }
    }
}

//-----------------------------EXECTIONS---------------------
$(document).ready(function() {
    
    //loads the attack value of each hero
    $("#heroAttack1").html($("#aragorn").children().attr("data-attack"));
    $("#heroAttack2").html($("#legolas").children().attr("data-attack"));
    $("#heroAttack3").html($("#gimli").children().attr("data-attack"));
    $("#heroAttack4").html($("#gandalf").children().attr("data-attack"));



    $("#attack").on("click", function(){
        if(battle){
            if(defenderSelected.charHealth > 0){
                //damage to defender
                defenderSelected.charHealth -= fighterSelected.charCounter;
                //defender counter attacks
                fighterSelected.charHealth -= defenderSelected.charAttack;
                
                //doubles fighters damage
                fighterSelected.charCounter = fighterSelected.charCounter + fighterSelected.charAttack;
                
                $("#charAttack").html(fighterSelected.charCounter);
                $("#charHealth").html(fighterSelected.charHealth);
                
                
                $("#defHealth").html(defenderSelected.charHealth) 
                
                if(defenderSelected.charHealth <= 0){
                    defenderDefeat();
                    
                    
                }
                
                if(fighterSelected.charHealth <= 0){
                    fighterDefeat();
                }
                
            }  
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
            fighterAttack.addClass("charAttack text-center");
            fighterAttack.text($(this).attr("data-attack"));
            fighterAttack.attr("id", "charAttack");
            $("#character").append(fighterAttack);

            
            //adds the health attribute
            var fighterHealth = $("<div>");
            fighterHealth.addClass("charHealth");
            fighterHealth.text($(this).attr("data-health text-center"));
            fighterHealth.attr("id", "charHealth");
            $("#character").append(fighterHealth);
            
            //need to make an object for the character chosen
            fighterSelected.charHealth = parseInt($(this).attr("data-health"));
            fighterSelected.charAttack = parseInt($(this).attr("data-attack"));
            fighterSelected.charName = $(this).attr("data-name")
            fighterSelected.charCounter = fighterSelected.charAttack
            
            //display fighters health
            $("#charHealth").html(fighterSelected.charHealth);
            
            //makes it so new fighter cant be picked until game over or reset
            fighterPicked = true;

            //character makes sound
            characterSound();

            //calling this makes the enemy's appear after 3 seconds
            setTimeout(enemyAppear, 3000);
        }
        //this will call on the enemy creation
        
        
    });
    //this picks the defending enemy
    $(".enemyFighter").on("click", function(){        
        //give a red glowing background in the class
        if (defenderPicked === false) {
            
            //creates container
            var defenderPort = $("<div>");
            defenderPort.addClass("enemy");
            defenderPort.attr("id", "enemy")
            $("#defender").append(defenderPort);

            //creates and attaches image
            var defender = $("<img>");
            defender.addClass("defendingEnemy");
            defender.attr("src", $(this).attr('src'));
            defender.attr("value", $(this).attr('value'));
            $("#enemy").append(defender);
            $(this).parent().fadeOut();
            
            //creates and attaches health div
            var defenderHealth = $("<div>");
            defenderHealth.addClass("charHealth");
            defenderHealth.text($(this).attr("data-health"));
            defenderHealth.attr("id", "defHealth");
            $("#enemy").append(defenderHealth);

            var defenderAttack = $("<div>");
            defenderAttack.addClass("charAttack");
            defenderAttack.text($(this).attr("data-attack"));
            defenderAttack.attr("id", "defAttack");
            $("#enemy").append(defenderAttack);

            var defenderName = $("<div>");
            defenderName.addClass("charName");
            defenderName.text($(this).attr("data-name"));
            defenderName.attr("id", "defName");
            $("#enemy").append(defenderName);

            //assigns stats to the object
            defenderSelected.charHealth = parseInt($(this).attr("data-health"));
            defenderSelected.charAttack = parseInt($(this).attr("data-attack"));
            defenderSelected.charName = $(this).attr("data-name");
            
            //stops the defender from being picked until defeated
            defenderPicked = true;

            //lets the attack button work again
            battle = true;
            $("#enemy").fadeIn();
            shallNot();

            if(music){
                music = false;
                gate.play();
            }
        }
    });

    //button to reset the game
    $("#reset").on("click", function() {
        console.log("reset");
        $("#fighting").empty();
        $("#defender").empty();
        $(".character").fadeIn();
        $(".enemy").fadeOut();
        $("#winLoss").empty();
        defenderPicked = false;
        fighterPicked = false;

        battle = true;

        minas.pause();
        gate.pause();
        
        music = true;
    });
    
});

//THIS IS ALL FORMER NOTES OR REJECTED CODEs

// var enemyStats = [80, 90, 70, 100]
//this will start once the character has been chosen and display the enemy's
//this doesnt work cause I cant click on one of these



//when the defenders health drops below 0 
//defender fades out and allows for a new defender to be selected
//the stats should auto reset because of the defender on click function
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