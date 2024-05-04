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
        $(".page-cover").hide("fast");
        startUp();
    });


})

//start game

function startUp(){
    $("#counter").text("0");
    newTarget();
};

//timer

//point generator

let point=0;

$("#target").click(function(){
    scoreGenerate();
    newTarget();

    function scoreGenerate(){

        //Add point by 1 * upgrade multiplier
        point+=1;
    
        $("#counter").text(point.toString());
    }
});

//move target

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

//upgrades

$("#upgrade-1").click(function(){
    if(point>=9){
        console.log("Enough points")
    } else{
        console.log("Not enough points")
    }
})

$("#upgrade-2").click(function(){
    if(point>=99){
        console.log("Enough points")
    } else{
        console.log("Not enough points")
    }
})

$("#upgrade-3").click(function(){
    if(point>=999){
        console.log("Enough points")
    } else{
        console.log("Not enough points")
    }
})

$("#upgrade-4").click(function(){
    if(point>=9999){
        console.log("Enough points")
    } else{
        console.log("Not enough points")
    }
})

$("#upgrade-5").click(function(){
    if(point>=99999){
        console.log("Enough points")
    } else{
        console.log("Not enough points")
    }
})