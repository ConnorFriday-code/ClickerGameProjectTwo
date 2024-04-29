$(document).ready(function(){

    $("#instructions-outer-div").addClass("page-cover")

    let innerInstructions = $("<div></div>").addClass("instructions-outer-box");

    let howToPlayh2 = $("<h2>How To Play!</h2>").addClass("how-to-play-title bg-yellow center oswald");

    let howToPlayDesc = $(`
    <div class="bg-grey how-to-play-desc">
        <h3>What to do</h3>
        <p>p1</p>
    </div>
    <div class="bg-grey how-to-play-desc">
        <h3>upgrades</h3>
    </div>
    <div class="bg-grey how-to-play-desc">
        <h3>The timer and defeat</h3>
    </div>
    `);

    let startGame = $(`
    <div id="start-game">
        <p>Play</p>
    </div>
    `).addClass("how-to-play-start bg-yellow center oswald");

    $("#instructions-outer-div").append(innerInstructions);

    $(".instructions-outer-box").append(howToPlayh2);
    $(".instructions-outer-box").append(howToPlayDesc);
    $(".instructions-outer-box").append(startGame);

    $("#start-game").click(function(event){
        $(".page-cover").hide("fast");
    });
})

