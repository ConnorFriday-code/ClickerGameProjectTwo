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
    });
})

