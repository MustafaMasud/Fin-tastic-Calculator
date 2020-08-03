
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

