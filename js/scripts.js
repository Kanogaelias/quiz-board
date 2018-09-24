// var class = $("#class").val()    

//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    //Create variables for each question's input value
    var q1 = document.getElementById("q1b").value;
    var q2 = document.getElementById("q2a").value;
    var q3 = document.getElementById("q3b").value;
    var q4 = document.getElementById("q4c").value;
    var q5 = document.getElementById("q5b").value;
    var q6 = document.getElementById("q6a").value;
    var q7 = document.getElementById("q7a").value;
    var q8 = document.getElementById("q8b").value;


    //Assign correct answers to field inputs
    if (q1 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q2 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q3 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q4 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q5 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q6 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q7 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    } if (q8 == "correct") {
        correctAnswers = correctAnswers + 12.5;
    };

    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "correctNumber" + "correctAnswers";