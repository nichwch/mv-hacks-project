/*SWAG*/

var robot = new Image();
robot.src = "http://nichwch.github.io/nickbot.png";
var canvas = document.getElementById("canvas");
function sprite (options) {

    var that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
   that.render = function()
    {

      that.context.drawImage(
      that.image,
      0,
      0,
      that.width,
      that.height,
      0,
      0,
      that.width,
      that.height
      );
    }
    return that;

}
var player = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: robot
});

player.render;
function sprite (options) {
    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}

var prompt=document.getElementById("prompt");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var contbutton=document.getElementById("contbutton");
var popup=document.getElementById("popup");
var popupmessage=document.getElementById("popupmessage");
var selection=0;
var random=0;
var question;
var questionprompt;
var answer;
contbutton.style.visibility="hidden";
popup.style.visibility="hidden";
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
    if(selection==answer)
    {
      var cont = function(event)
      {
         button1.style.visibility='visible';
        button2.style.visibility='visible';
        button3.style.visibility='visible';
        button4.style.visibility='visible';
         contbutton.style.visibility='hidden';
         contbutton.removeEventListener('click',cont);
          quiz();
      }
      contbutton.addEventListener('click',cont);
      contbutton.style.visibility='visible';
      button1.removeEventListener('click',handleOne);
     button2.removeEventListener('click',handleTwo);
      button3.removeEventListener('click',handleThree);
      button4.removeEventListener('click',handleFour);
      button1.style.visibility='hidden';
      button2.style.visibility='hidden';
      button3.style.visibility='hidden';
      button4.style.visibility='hidden';
      prompt.innerHTML="You got the right answer!";
    }
    else
    {
            var cont = function(event)
      {
         button1.style.visibility='visible';
        button2.style.visibility='visible';
        button3.style.visibility='visible';
        button4.style.visibility='visible';
         contbutton.style.visibility='hidden';
         contbutton.removeEventListener('click',cont);
          quiz();
      }
      contbutton.addEventListener('click',cont);
      contbutton.style.visibility='visible';
      button1.removeEventListener('click',handleOne);
     button2.removeEventListener('click',handleTwo);
      button3.removeEventListener('click',handleThree);
      button4.removeEventListener('click',handleFour);
      button1.style.visibility='hidden';
      button2.style.visibility='hidden';
      button3.style.visibility='hidden';
      button4.style.visibility='hidden';
      prompt.innerHTML="Sorry, that was incorrect. The correct answer is "+question[answer];
    }
  }
  button1.addEventListener('click',handleOne);
  button2.addEventListener('click',handleTwo);
  button3.addEventListener('click',handleThree);
  button4.addEventListener('click',handleFour);
}
quiz();
