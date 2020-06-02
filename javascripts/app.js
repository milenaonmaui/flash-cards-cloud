const main = function(){
    "use strict";

    const flashCards = [
        {front: "Front1", back: "Back1"},
        {front: "Front2", back: "Back2"}
    ]
    const displayCard = (ind) => {
        let content=$("<p>");
        $("main .content").empty();
        let cardDiv = $("<div>");
        cardDiv.addClass("card");
        $(".content").append(cardDiv)
        $(cardDiv).append(content)
        content.addClass("card-text")
        content.text(flashCards[ind].front)
        $(cardDiv).on("click", function(){
            if (content.text() === flashCards[ind].front) {
                content.text(flashCards[ind].back)
            } else {
                content.text(flashCards[ind].front)
            }
        })
    }
    
    $(".tabs span").toArray().forEach(function(el){
        $(el).on("click", function(){
            let content=$("<p>");
                $(".tabs span").removeClass("active")
                $("el").addClass("active")
        
                if ($(el).parent().is(":nth-child(1)")) {
                    let ind = 0
                    displayCard(ind)
                } else if ($(el).parent().is(":nth-child(2)")) {
                    let ind = flashCards.length-1
                    displayCard(ind)
                } else if ($(el).parent().is(":nth-child(3)")) {
                    $("main .content").empty();
                    let labelFront = $("<p>").addClass("label")
                    let labelBack = $("<p>").addClass("label")
                    let inputFront = $("<input>")
                    let inputBack = $("<textarea>")
                    
                    let button = $("<button>")
                    button.text("Save")
                    button.addClass("save-btn")
                    labelFront.text("Front of card:")
                    labelBack.text("Back of card:")
                    $(".content").append(labelFront)
                    $(".content").append(inputFront)
                    $(".content").append("<br>")
                    $(".content").append(labelBack)
                    $(".content").append(inputBack)
                    $(".content").append("<br>")
                    $(".content").append(button)
                    $(".save-btn").on("click", function(){
                        if($(".content input").val()!==""){
                            flashCards.push({front: $(".content input").val(), back: $(".content textarea").val()})
                            $(".content input").val("")
                            $(".content textarea").val("")
                        }
                    })
                }
                
           return false; 
        })
    })
       
};
$(document).ready(main)