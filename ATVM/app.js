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
  const Pmt = document.getElementById("payment")
  var result;
  
 
  const principal1 = parseFloat(amount.value);
  const principal2 = parseFloat(Fvamount.value);
  const AccInterest = parseFloat(interest.value) / 100 ;
  const periodYear = parseFloat(years.value) ;
  const Periods = parseFloat(periodsPerYear.value);
  const payments = parseFloat(Pmt.value);

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
  else if(!interest.value){
    alert("Please input Interest")
  }
  else if(!Periods){
    alert("Please input Periods")
  }
  if(Fvamount.value != 0 && amount.value != 0 && !Pmt.value){
    alert("Please input either FV or PV to calculate PMT, but not both")
  }
  
  if(!Pmt.value){
    if(Fvamount.value==0){
    result = principal1/PVIFA
    document.getElementById("type").textContent = "Payment";
    ans.value = Math.round(result*100)/100
    }
    else if (amount.value==0){
      result = principal2/FVIFA
      document.getElementById("type").textContent = "Payment";
      ans.value = Math.round(result*100)/100
    }else{
      alert("error")
    }
  }

  if(!years.value){
    if(amount.value!=0){
      result = (-1*Math.log(1-(principal1/payments)*(AccInterest)))/Math.log(1+(AccInterest))
      document.getElementById("type").textContent = "Years";
      ans.value= Math.round(result*100)/100
    }
    else if(Fvamount.value!=0){
      result= Math.log(1+(principal2/payments)*(AccInterest))/Math.log(1+(AccInterest))
      document.getElementById("type").textContent = "Years";
      ans.value= Math.round(result*100)/100
    }
  }

  

  //Finds present value
  if(!amount.value){
      
      result = payments*PVIFA;
      document.getElementById("type").textContent = "Present Value";
      ans.value = Math.round(result*100)/100;
    
      //finds the principal payoff
      InterestR = ans.value * (AccInterest/Periods);
      payment = ans.value / PVIFA;
      principP = ans.value - ( payment- InterestR);
      princip.value = parseInt(principP);
  }

  //Finds future value
  if(!Fvamount.value){
    
    result = payments * FVIFA;
    document.getElementById("type").textContent = "Future Value"
    ans.value = Math.round(result*100)/100;

    //finds the prinicipal payoff
    InterestR = principal1 * (AccInterest/Periods);
    payment = principal1 / PVIFA;
    principP = principal1 - (payment-InterestR);
    princip.value = parseInt(principP);
  }

 
    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader
    document.getElementById("loading").style.display = "none";
} 


/* else if (!years.value){
    alert("Please add the number of years");
  }
  else if(!interest.value){
    alert("Please add the Interest amount");
  }
  else if(!Fvamount.value && !amount.value){
    alert("Please input either FV or PV")
  }*/