// var class = $("#class").val()    

//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    // var correctAnswers = 0;
    var answers = 0;
    //Create variables for each question's input value
    //Create variables for each question's input value
    var quizOne = $("input:radio[name=question1]:checked").val();
    var quizTwo = $("input:radio[name=question2]:checked").val();
    var quizThree = $("input:radio[name=question3]:checked").val();
    var quizFour = $("input:radio[name=question4]:checked").val();
    var quizFive = $("input:radio[name=question5]:checked").val();
    var quizSix = $("input:radio[name=question6]:checked").val();
    var quizSeven = $("input:radio[name=question7]:checked").val();
    var quizEight = $("input:radio[name=question8]:checked").val();






    if (quizOne == "correct") {
        answers = answers + 12.5;
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
