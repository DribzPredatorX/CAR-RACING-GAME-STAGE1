class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("CAR RACING GAME")
        title.position(450,10)

        var input = createInput("Name")
        input.position(500,250)

        var button = createButton("PLAY")
        button.position(550,300)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement("h3")
            greeting.html("HELLO "+name)
            greeting.position(500,250)
        })
    }

}
