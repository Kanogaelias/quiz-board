// var class = $("#class").val()    

//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;
    var answers = 0;
    //Create variables for each question's input value
    //Create variables for each question's input value
    var quizOne = document.getElementsByName("q1").value;
    var quizTwo = document.getElementsByName("q2").value;
    var quizThree = document.getElementsByName("q3").value;
    var quizFour = document.getElementsByName("q4").value;
    var quizFive = document.getElementsByName("q5").value;
    var quizSix = document.getElementsByName("q6").value;
    var quizSeven = document.getElementsByName("q7").value;
    var quizEight = document.getElementsByName("q8").value;

    if (quizOne == "correct") {
        answers = correctAnswers + 12.5;
    }
    if (quizTwo == "correct") {
        answers = answers + 12.5;
    }
    if (quizThree == "correct") {
        answers = answers + 12.5;
    }
    if (quizFour == "correct") {
        answers = answers + 12.5;
    }
    if (quizFive == "correct") {
        answers = answers + 12.5;
    }
    if (quizSix == "correct") {
        answers = answers + 12.5;
    }
    if (quizSeven == "correct") {
        answers = answers + 12.5;
    }
    if (quizEight == "correct") {
        answers = answers + 12.5;
    }




    document.getElementById("message").innerHTML = "Score is " + answers + "%";
    document.getElementById("result").style.visibility = "visible";
}
