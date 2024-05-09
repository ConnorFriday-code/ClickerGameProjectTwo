$(document).ready(function(){

    $("#instructions-outer-div").addClass("page-cover border")

    let innerInstructions = $("<div></div>").addClass("instructions-outer-box border");

    let howToPlayh2 = $("<h2>How To Play!</h2>").addClass("how-to-play-title bg-yellow center oswald border");

    let howToPlayDesc = $(`
    <div class="bg-grey how-to-play-desc border">
        <h3>What To Do</h3>
        <p>The goal is simple! After selecting play button below simply click on the target in the grey game area to earn a point!
        <br>Everytime you click on the target, though, it will move to a new spot!
        <br>You can keep track of your score in the white box just above the game area</p>
    </div>
    <div class="bg-grey how-to-play-desc border">
        <h3>Upgrades</h3>
        <p>Using the points you've earned, you can optionally choose to spend those point on a upgrade below.
        <br>These upgrades give a multiplier to the score you earn, making investiment an important decision.
        <br>Don't take too long deciding though, because...</p>
    </div>
    <div class="bg-grey how-to-play-desc border">
        <h3>The Timer and Defeat</h3>
        <p>You have five seconds until the timer runs out!
        <br>Don't worry though, everytime you click on the target, the timer resets!
        <br>If the timer runs out then it's game over! Your score will be displayed and the option to try again.</p>
    </div>
    `);

    let startGame = $(`
    <div id="start-game">
        <p id="play-button">Play</p>
    </div>
    `).addClass("how-to-play-start bg-yellow center oswald border");

    $("#instructions-outer-div").append(innerInstructions);

    $(".instructions-outer-box").append(howToPlayh2);
    $(".instructions-outer-box").append(howToPlayDesc);
    $(".instructions-outer-box").append(startGame);

    $("#start-game").mouseenter(function(){
        $("#play-button").text("Play!")
        $(".how-to-play-start").css("color","white") 
    });
    
    $("#start-game").mouseleave(function(){
        $("#play-button").text("Play")
        $(".how-to-play-start").css("color","black")
    });
    
    $("#start-game").click(function(event){
        $(".page-cover").css("visibility","hidden");
        startUp();
    });

    //Start timer function when user selects start game
    $("#start-game").click(function(){
        timer();
    });


})

//Start game

function startUp(){
    $("#counter").text("0");
    newTarget();
};

//Timer

//Red div slides across over 3 seconds
//When width reaches 100%, the function will activate which will trigger the game over function
function timer(){
    $("#red").stop().animate({width:"100%"},3000, function() {
        gameOver();
    });
}

//Stop red div from expanding, set width back to 0, then start timer function again.
function targetClicked(){
    $("#red").stop().css("width","0%");
    timer();
}

//Point generator

let point=0;

$("#target").click(function(){
    scoreGenerate();
    newTarget();

    function scoreGenerate(){

        //If there are no upgrades, increase score by 1. If upgrades have been brought, increase score by 1 x the multiplier instead.
        //This is to solve the problem of 1 x 0 at the start of the game, or using addition of 1+0 also meaning 1+10, leading to score increases by 11 or 101.
        if(upgradeMultiplier===0){
            //Add point by 1
            point+=1;
        }else{
            //Add point by 1 * upgrade multiplier
            point+=1*upgradeMultiplier;
        }

    
        $("#counter").text(point.toString());
    }

    targetClicked();
});

//Move target

function newTarget(){
    //On target being click, run...
    $("#target").click(function(){

        //Grab the height and width of the game area and store them to two let variables
        let gameAreaWidth = $("#canvas").width()-50;
        let gameAreaHeight = $("#canvas").height()-50;

        //Make a random number to serve as new left and top * size of canvas
        let newX = Math.floor(Math.random() * gameAreaWidth);
        let newY = Math.floor(Math.random() * gameAreaHeight);
        

        //Targetting the target, edit the css to alter the styling of left and top to new numbers+px
        $(this).css({
            left: newX+"px",
            top: newY+"px"
        })
    })
};

//Upgrades

$(".upgrade-card").mouseenter(function(){
    $(this).css("border", "3px #fff solid")
})

$(".upgrade-card").mouseleave(function(){
    $(this).css("border", "3px #000 solid")
})


let upgradeMultiplier = 0

$("#upgrade-1").click(function(){
    if(point>=9){
        //Minus 9 points
        point -=9;

        //Update score to show deducted points
        $("#counter").text(point.toString());

        //Add 10 to score multiplier
        upgradeMultiplier +=10;
    } else{
        //Make the background turn red
        $("#upgrade-1").removeClass("bg-yellow").addClass("bg-red")

        //After half a second, return back to yellow
        setTimeout(function() {
            $("#upgrade-1").removeClass("bg-red").addClass("bg-yellow");
        }, 500);
    }
})

$("#upgrade-2").click(function(){
    if(point>=99){
        //Minus 99 points
        point -=99;

        //Update score to show deducted points
        $("#counter").text(point.toString());

        //Add 20 to score multiplier
        upgradeMultiplier +=20;
    } else{
        //Make the background turn red
        $("#upgrade-2").removeClass("bg-yellow").addClass("bg-red")

        //After half a second, return back to yellow
        setTimeout(function() {
            $("#upgrade-2").removeClass("bg-red").addClass("bg-yellow");
        }, 500);
    }
})

$("#upgrade-3").click(function(){
    if(point>=999){
        //Minus 999 points
        point -=999;

        //Update score to show deducted points
        $("#counter").text(point.toString());

        //Add 50 to score multiplier
        upgradeMultiplier +=50;
    } else{
        //Make the background turn red
        $("#upgrade-3").removeClass("bg-yellow").addClass("bg-red")

        //After half a second, return back to yellow
        setTimeout(function() {
            $("#upgrade-3").removeClass("bg-red").addClass("bg-yellow");
        }, 500);
    }
})

$("#upgrade-4").click(function(){
    if(point>=9999){
    //Minus 9999 points
    point -=9999;

    //Update score to show deducted points
    $("#counter").text(point.toString());
        
    //Add 100 to score multiplier
    upgradeMultiplier +=100;
    } else{
        //Make the background turn red
        $("#upgrade-4").removeClass("bg-yellow").addClass("bg-red")

        //After half a second, return back to yellow
        setTimeout(function() {
            $("#upgrade-4").removeClass("bg-red").addClass("bg-yellow");
        }, 500);
    }
})

$("#upgrade-5").click(function(){
    if(point>=99999){
        //Minus 99999 points
        point -=99999;

        //Update score to show deducted points
        $("#counter").text(point.toString());

        //Add 1000 to score multiplier
        upgradeMultiplier +=1000;
    } else{
        //Make the background turn red
        $("#upgrade-5").removeClass("bg-yellow").addClass("bg-red")

        //After half a second, return back to yellow
        setTimeout(function() {
            $("#upgrade-5").removeClass("bg-red").addClass("bg-yellow");
        }, 500);
    }
})

//Game Over

function gameOver(){
    $("#game-over-div").css("visibility","visible")
    $("#game-over-div").addClass("page-cover border");
    let gameOverInnerDiv = $(`
    <div id="game-over-outer-box" class="border">
        <h2 id="game-over-title" class="bg-red center oswald border">Game Over!</h2>
        <div>
            <p>The time ran out</p>
            <p>You scored:</p>
            <div id="final-score">
                <p>${point}</p>
            </div>
        </div>
        <div id="restart-button">
            <p>Try Again!</p>
        </div>
    </div>`);
    $("#game-over-div").html(gameOverInnerDiv);
    $("#restart-button").click(function(event){
        $(".page-cover").css("visibility","hidden");
        startUp();
    });

    //Start timer function when user selects start game
    $("#restart-button").click(function(){
        upgradeMultiplier = 0;
        point=0;
        targetClicked();
        timer();
    });
}