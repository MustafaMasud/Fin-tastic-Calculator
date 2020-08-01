// Listen for the event listener of click
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
 
  const amount = document.getElementById("amount");
  const Fvamount = document.getElementById("fvamount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const ans = document.getElementById("answer");
  var result;
  
 
  const principal1 = parseFloat(amount.value);
  const principal2 = parseFloat(Fvamount.value);
  const AccInterest = parseFloat(interest.value) / 100 ;
  const Periods = parseFloat(years.value);

  //Finds the year variable
  if (!years.value){
    document.getElementById("type").textContent = "Years";
    result = Math.log(principal2/principal1)/Math.log(1+AccInterest);
    ans.value = Math.round(result*100)/100;
  }

  //Finds present value
  if(!amount.value){
    result = principal2/((1+AccInterest)**Periods);
    document.getElementById("type").textContent = "Present Value";
    ans.value = Math.round(result*100)/100;
  }

  //finds future value
  if(!Fvamount.value){
    result = principal1 * ((1+AccInterest)**Periods);
    document.getElementById("type").textContent = "Future Value";
    ans.value = Math.round(result*100)/100;
    }

  //finds interest value
  if(!interest.value){
    result = ((principal2/principal1)**(1/Periods))-1
    document.getElementById("type").textContent = "Interest %";
    ans.value = Math.round(result*100*100)/100;
  }

    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader
    document.getElementById("loading").style.display = "none";
} 
