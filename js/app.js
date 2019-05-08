'use strict';

var answers = [];

var question = prompt('Would you like to play a quick guessing game?');
question = question.toLowerCase();

if(question === "yes" || question === "y"){

    var response;
    var score = 0;

    // question 1
    answers.q1 = prompt("Guess if: English is my first language.");
    answers.q1 = answers.q1.toLowerCase();
    if(answers.q1 === "yes" || answers.q1 === "y"){
        response = alert("Incorrect. My first language is actually Russian!");
    } else if(answers.q1 === "no" || answers.q1 === "n"){
        response = alert("Correct! My first language is actually Russian!");
        score++;
    } else{
        response = alert("I asked you a question, please respond.");
    }
    
    // question 2
    answers.q2 = prompt("Guess if: I have a cat named Lili.");
    answers.q2 = answers.q2.toLowerCase();
    if(answers.q2 === "yes" || answers.q2 === "y"){
        response = alert("Correct! I use my cat, Lili, in my practice code so keep an eye out for her.");
        score++;
    } else if(answers.q2 === "no" || answers.q2 === "n"){
        response = alert("Incorrect. I use my cat, Lili, in my practice code so keep an eye out for her.");
    } else{
        response = alert("I asked you a question, please respond.");
    }
    
    // question 3
    answers.q3 = prompt("Guess if: Rage games are my favorite type of video games.");
    answers.q3 = answers.q3.toLowerCase();
    if(answers.q3 === "yes" || answers.q3 === "y"){
        response = alert("Correct! I actually enjoy playing games like Cat Mario and Getting Over It.");
        score++;
    } else if(answers.q3 === "no" || answers.q3 === "n"){
        response = alert("Incorrect. I enjoy playing games like Cat Mario and Getting Over It by Bennett Foddy.");
    } else{
        response = alert("I asked you a question, please respond.");
    }
    
    // question 4
    answers.q4 = prompt("Guess if: I use Photoshop as my art program of choice.");
    answers.q4 = answers.q4.toLowerCase();
    if(answers.q4 === "yes" || answers.q4 === "y"){
        response = alert("Incorrect. I use GIMP as my art program of choice.");
    } else if(answers.q4 === "no" || answers.q4 === "n"){
        response = alert("Correct! I use GIMP as my art program of choice.");
        score++;
    } else{
        response = alert("I asked you a question, please respond.");
    }
    
    // question 5
    answers.q5 = prompt("Guess if: I have a hard time interacting with others because of my face blindness.");
    answers.q5 = answers.q5.toLowerCase();
    if(answers.q5 === "yes" || answers.q5 === "y"){
        response = alert("Correct! I have Prosopagnosia, which is an inability to remember faces.");
        score++;
    } else if(answers.q5 === "no" || answers.q5 === "n"){
        response = alert("Incorrect. I have Prosopagnosia, which is an inability to remember faces.");
    } else{
        response = alert("I asked you a question, please respond.");
    }

    answers.push();

    document.write('<p id="answersTitle">',"Your Answers:",'</p>',

        '<p id="answers">' + "English is my first language. You responded with: " + answers.q1,'<br>','<br>'
        + "I have a cat named Lili. You responded with: " + answers.q2,'<br>','<br>'
        + "Rage games are my favorite type of video games. You responded with: " + answers.q3,'<br>','<br>'
        + "I use Photoshop as my art program of choice. You responded with: " + answers.q4,'<br>','<br>'
        + "I have a hard time interacting with others because of face blindness. You responded with: " + answers.q5,'</p>');

    document.write('<p id="answersTitle">',"You got " + score + "/5 right." ,'</p>');

    if(score === 5){
        document.write('<p id="answersTitle">',"Purrfect!!",'</p>');
    }


} else if(question === "no"){

    question = alert("Alright, maybe next time.");
    document.write('<p id="answersTitle">' + "Please refresh the page if you change your mind." + '</p>');

} else {

    question = alert("Sorry, I don't recognize that answer.");
    document.write('<p id="answersTitle">' + "Please refresh the page and reply with yes or no this time." + '</p>');

}

