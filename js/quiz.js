//Creating a timer to submit the quiz after a timer period
window.onload = countdownTimer();
var intervals;
var timer = 100;
function countdownTimer(){
    // var timer = 10;
    intervals = setInterval(function(){
        document.getElementById("timer-display").innerHTML = "You have "+timer+" seconds";
        if (timer == 0) {
            clearInterval(intervals);
            alert("Oops! You ran out of time!");
            document.getElementById("btnSubmit").click();      
        }
        else {
            timer--;
        }
    },1000);
}

var score=0; //Stores the current score
correctAnswers = ["A","C","D","B","B","D","A","B","C","C"]; //Stores the correct answers
inputAnswers=[]; //Stores the checked radio values which user selects

    
function getRadioValue(radioArray) {
    //Getting values of checked radio inputs
	var i;
    for ( i = 0; i < radioArray.length; i++ ) {
        if ( radioArray[ i ].checked ) { 
            return radioArray[ i ].value ;
        }
    }
    return "";   
}

        
function checkAnswers(form){
    //Stopping timer when submit button click by manually
    clearInterval(intervals);
    //This function saves checked radio values and compares it with correct answers
    //Then gives 4 differnet background colors according to the score
    inputAnswers[0]=getRadioValue(form.question1)	
    inputAnswers[1]=getRadioValue(form.question2)	
	inputAnswers[2]=getRadioValue(form.question3)	
    inputAnswers[3]=getRadioValue(form.question4)	
	inputAnswers[4]=getRadioValue(form.question5)	
    inputAnswers[5]=getRadioValue(form.question6)	
    inputAnswers[6]=getRadioValue(form.question7)	
    inputAnswers[7]=getRadioValue(form.question8)	
    inputAnswers[8]=getRadioValue(form.question9)
    inputAnswers[9]=getRadioValue(form.question10)

    //Storing Ids of the area which shows if an answer is right or wrong only after submit the quiz in an array
	resultsAreaIds = ["resultsQ1","resultsQ2","resultsQ3","resultsQ4","resultsQ5","resultsQ6","resultsQ7","resultsQ8","resultsQ9","resultsQ10"];
	for(var x=0;x<10;x++){
        if(inputAnswers[x]==correctAnswers[x]){
            document.getElementById(resultsAreaIds[x]).style.color = "Green" ;
            document.getElementById(resultsAreaIds[x]).innerHTML = "You got this correct!" ;
            score+=2;
        }
        else{
            document.getElementById(resultsAreaIds[x]).style.color = "Red" ;
            document.getElementById(resultsAreaIds[x]).innerHTML = "You got this wrong! Correct answer is ("+correctAnswers[x]+")";
            score-=1;
        }
    }
    document.getElementById("final-Results").style.visibility = "visible" ;

    // Cehcking score and deciding which color should be displayed as the background color
    if(score==20){
        document.getElementById("resultsDisplay").innerHTML = "Amazing! You got all question correct!<br> Your score is "+score+" :-) <br> You finished the quiz in "+(100-timer)+" seconds";
        document.getElementById("final-Results").style.backgroundColor = "Green" ;
    }    
    else if(score>=10){
        document.getElementById("resultsDisplay").innerHTML = "Not Bad! <br> Your score is "+score+" ;-) <br> You finished the quiz in "+(100-timer)+" seconds";
        document.getElementById("final-Results").style.backgroundColor = "Blue" ;
    }
    else if(score>=0){
        document.getElementById("resultsDisplay").innerHTML = "Bad!<br> Your score is "+score+" :-| <br> You finished the quiz in "+(100-timer)+" seconds";
        document.getElementById("final-Results").style.backgroundColor = "Orange" ;
    }
    else{
        document.getElementById("resultsDisplay").innerHTML = "Go study! You have got a negative mark. You really need do better than this! <br> Your score is "+score+" ;-( <br> You finished the quiz in "+(100-(timer+1))+" seconds";
        document.getElementById("final-Results").style.backgroundColor = "Red" ;
    }      
}