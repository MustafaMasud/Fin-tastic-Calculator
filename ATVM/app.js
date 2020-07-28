// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Show Loader
  document.getElementById("loading").style.display = "block";
 
  setTimeout(calculations, 2000);
 
  e.preventDefault();
});
 
// Calculate Results
function calculations() {
 
  //selects HTML and manipulates DOM
  const amount = document.getElementById("amount");
  const Fvamount = document.getElementById("fvamount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const ans = document.getElementById("answer");
  const princip = document.getElementById("principal");
  const periodsPerYear = document.getElementById("periods");
  var result;
  
 
  const principal1 = parseFloat(amount.value);
  const principal2 = parseFloat(Fvamount.value);
  const AccInterest = parseFloat(interest.value) / 100 ;
  const periodYear = parseFloat(years.value) ;
  const Periods = parseFloat(periodsPerYear.value);

  //Calculations 
  const totalPeriods = periodYear * Periods;
  const FVIFA = ((1+(AccInterest/Periods))**(totalPeriods) - 1)/(AccInterest/Periods);
  const PVIFA = (1-(1/((1+AccInterest/Periods)**(totalPeriods))))/(AccInterest/Periods);
  var InterestR;
  var payment;
  var principP;



  //error catches 
  if(!years.value && !amount.value && !Fvamount.value && !interest.value){
    alert("Please input the required fields!")
  }
  else if (!years.value){
    alert("Please add the number of years");
  }
  else if(!interest.value){
    alert("Please add the Interest amount");
  }
  else if(!Fvamount.value && !amount.value){
    alert("Please input either FV or PV")
  }

  //Finds present value
  if(!amount.value){
      
      result = principal2*PVIFA;
      document.getElementById("type").textContent = "Present Value";
      ans.value = parseInt(result);
    
      //finds the principal payoff
      InterestR = ans.value * (AccInterest/Periods);
      payment = ans.value * PVIFA;
      principP = ans.value - ( payment- InterestR);
      princip.value = parseInt(principP);
  }

  //Finds future value
  if(!Fvamount.value){
    
    result = principal1 * FVIFA;
    document.getElementById("type").textContent = "Future Value"
    ans.value = parseInt(result);

    //finds the prinicipal payoff
    InterestR = principal1 * (AccInterest/Periods);
    payment = principal1 * PVIFA;
    principP = principal1 - (payment-InterestR);
    princip.value = parseInt(principP);
  }

 
    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader
    document.getElementById("loading").style.display = "none";
} 


