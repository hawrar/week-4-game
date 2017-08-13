
//Chooses a random number at the beginning between 19-120
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  

  $('#randomNumber').text(Random);
  
  //Variables for random numbers when clicked the stones

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  //Variables for total, wins, and losses

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//Resetting for the next play
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//Gives the actual total 
function wow(){
alert("Hey champion, you indeed won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//Loss calculations
function loser(){
alert ("You lost. Did you sleep well last night, owl?!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//Click functions
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          wow();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          wow();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          wow();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          wow();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 