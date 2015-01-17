var prompt=document.getElementById("prompt");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var selection=0;
var random=0;
var question;
var questionprompt;
var answer;
var quiz=function()
{
  random=Math.floor((Math.random()*4));
  question=questions[random];
  questionprompt=question[0];
  answer=question[5];
  prompt.innerHTML=questionprompt;
  button1.innerHTML=question[1];
  button2.innerHTML=question[2];
  button3.innerHTML=question[3];
  button4.innerHTML=question[4];
  var handleOne = function(event){
    selection=1;
    checkAnswer();
  }
  var handleTwo = function(event){
    selection=2;
    checkAnswer();
  }
  var handleThree = function(event){
    selection=3;
    checkAnswer();
  }
  var handleFour = function(event){
    selection=4;
    checkAnswer();
  }
  var checkAnswer = function(){
    if(selection=answer)
    {

    }
    else
    {
      
    }
  }
  button1.addEventListener('onClick',handleOne);
  button2.addEventListener('onClick',handleTwo);
  button3.addEventListener('onClick',handleThree);
  button4.addEventListener('onClick',handleFour);
}
quiz();
