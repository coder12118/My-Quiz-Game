class Question{

constructor(){
    this.input1 = createInput("Name")
    this.input2 = createInput("Enter correct option here")
    //this.input3 = createInput("Submit")    
    this.button = createButton("Submit")
    this.greeting = createElement("h2")
    this.title = createElement("h2")
    this.question = createElement("h2")
    this.option1 = createElement("h2")
    this.option2 = createElement("h2")
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}

display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question: What satrts and ends with the letter 'E', but has only one letter?");
    this.question.position(80, 80);
    this.option1.html("1: Everyone");
    this.option1.position(80, 100);
    this.option2.html("2: Envelope");
    this.option2.position(80, 120);

    this.input1.position(80, 230);
    this.input2.position(400, 230);
    //this.input3.position(250, 350);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        contestant.submit = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
}

}