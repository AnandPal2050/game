 function game() {
   var con=confirm("Are you ready to play ?");
      if(con===true){
        alert("Welcome to the game  :)");
        alert("You will play against ME.");
        start();
      }
     else {
       alert("Thank you for visiting");
     }
 }
function start() {
var choice=prompt("  stone , paper , scissor ");
if (choice==="stone") {
  var comchoice1;
    var num=Math.random();
      if (num<=0.30) {
        comchoice1="stone";
      }
      else if (num<=0.60) {
        comchoice1="paper";
      }
      else {
        comchoice1="scissor";
      }
       if (choice==="stone") {
         if (comchoice1==="paper") {
           alert("PAPER , i win hahaha you loose");
           start();
         }
         else if (comchoice1==="scissor") {
           alert("SCISSOR , you win aaahhaa i loose ");
           start();
         }
         else {
           alert(" STONE , match draw let's try once more");
           start();
         }
       }
    }
else if(choice==="paper"){
   var comchoice2;
    var num2=Math.random();

    if (num2<=0.30) {
      comchoice2="stone";
    }
    else if (num2<=0.60) {
      comchoice2="paper";
    }
    else {
      comchoice2="scissor";
    }
     if (choice==="paper") {
       if (comchoice2==="stone") {
         alert("STONE , you win aaahhaa i loose");
         start();
       }
       else if (comchoice2==="scissor") {
         alert("SCISSOR , i win hahaha you loose");
         start();
       }
       else {
         alert("PAPER ,match draw let's try once more");
         start();
       }
     }
}
else if (choice==="scissor") {
  var num3=Math.random();
  var comchoice3;
  if (num3<=0.30) {
    comchoice3="stone";
  }
  else if (num3<=0.60) {
    comchoice3="paper";
  }
  else {
    comchoice3="scissor";
  }
   if (choice==="scissor") {
     if (comchoice3==="stone") {
       alert("STONE , i win hahaha you loose");
       start();
     }
     else if (comchoice3==="paper") {
       alert("PAPER , you wins aaahhaa i loose");
       start();
     }
     else {
       alert(" SCISSOR , match draw let's try once more");
       start();
     }
   }
}
else{
  alert("Thank you for visiting");
}
}
// this is the ending of the game.
