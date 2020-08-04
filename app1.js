//Contains all the logic for button functionality on the calculator
//Programmer: Mustafa Mohsin
//Date Coded: July 17, 2020
//Date Approved: August 3, 2020
//Approved by: All group members
//Arguments: The arguments are the event listeners that activate the code, and the files accessed.
//Variables: variables include “value”, “letters”, and “i” 
//Files accessed:TVM/Index.html, ATVM/index.html.
//Files Changed: None
//Input/Output: Event Listeners await mouse and/or keyboard input, new window opens for TVM and ATVM functions.
//Error handling: loop to determine if a string character is added in the calculator input for evaluation, this will send a pop up alerting the user.
/*List of previous modifications and who approved: 
1. Modifying buttons - Approved by all
2. Adding functionality to buttons - Approved by all
3. Implementing “eval” function to calculate input - Approved by all
4. Adding the dark mode button - Approved by all */
//any known faults: None
 

//Listening for the equal button being clicked
document.querySelector('#dark').addEventListener("click", function(){

  //makes screen dark
  document.getElementById('screen').style.background = '#0c0c0c'
  

});

//Listening for the equal button being clicked
document.querySelector('#equal').addEventListener("click",function(){
  //checks for string
  value = document.getElementById('value').value
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //for loop that checks for string
  for(var i =0; i<52;i++){
    if(value.includes(letters.charAt(i))){
      alert("Error")
      break
    }
  }
 
})

//Listening for the the TVM button being clicked
document.querySelector('#TVM').addEventListener("click", function(){
 
  //opens new window for TVM
  window.open("file:///C:/Users/Mustafa%20Mohsin/Desktop/Web%20dev/Software%20eng/TVM/index.html","__blank");

});

//Listening for the ATVM button being clicked
document.querySelector('#ATVM').addEventListener("click", function(){
 
  //opens new window for ATVM
  window.open("file:///C:/Users/Mustafa%20Mohsin/Desktop/Web%20dev/Software%20eng/ATVM/index.html","__blank");

});

