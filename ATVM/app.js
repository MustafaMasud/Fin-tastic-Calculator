//This file supports the ATVM financial function by opening a new tab for the user to input their calculation
//Programmer: Mustafa Mohsin
//Date Coded: July 25, 2020
//Date Approved: Aug 3, 2020
//Approved by: All Group Members
//Arguments: Event listeners as well as the variables to be calculated (principal1, principal2, periodYear, AccInterest, Periods, payments, totalPeriods, FVIFA, and PVIFA).
//Constants: amount, Fvamount, interest, years, ans, periodsPerYear, Pmt, principal1, principal2, periodYear, AccInterest, Periods, payments, totalPeriods, FVIFA, and PVIFA
//Variables: result, count
//Files accessed: index.html, styles.css
//Files Changed: None
//Input: event listeners used for mouse click, keyboard used to enter values( amount, Fvamount, interest, years, ans, periodsPerYear, Pmt)
//Output: error messages,instructions displayed and the result of calculations(result)
//Error handling: Negative numbers, blank values and no fields left blank cause an error message
//List of previous modifications and who approved:
//1.Implemented optimizing error handling - Approved by all
//2.Removing redundant code - Approved by all
//3.Small bug fixes such as displaying values - Approved by all
//Any known faults: None




// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Show Loader
  document.getElementById("loading").style.display = "block";
 
  setTimeout(calculations, 2000);
 
  e.preventDefault();
});

//Alert in the beginning of page
alert("Please leave exactly one option blank, the option left blank will be calculated for you")
 
// Calculate Results
function calculations() {
 
  //Declaring elements to select
  const amount = document.getElementById("amount");
  const Fvamount = document.getElementById("fvamount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const ans = document.getElementById("answer");
  const periodsPerYear = document.getElementById("periods");
  const Pmt = document.getElementById("payment")

  //Declaring variables that are changeable
  var result;
  var count = 0;
  
  //changing elements to numbers
  const principal1 = parseFloat(amount.value);
  const principal2 = parseFloat(Fvamount.value);
  const AccInterest = parseFloat(interest.value) / 100 ;
  const periodYear = parseFloat(years.value) ;
  const Periods = parseFloat(periodsPerYear.value);
  const payments = parseFloat(Pmt.value);

  //constant calculations
  const totalPeriods = periodYear * Periods;
  const FVIFA = ((1+(AccInterest/Periods))**(totalPeriods) - 1)/(AccInterest/Periods);
  const PVIFA = (1-(1/((1+AccInterest/Periods)**(totalPeriods))))/(AccInterest/Periods);

  //Error catches 
  //Negative number errors
  if(principal1<0 || principal2 <0 || AccInterest<0 || Periods<0 || periodYear<0 ||payments<0){
    alert("Please Input positive values")
  }
  //If all numbers exist error
  else if (principal1 && principal2  && AccInterest && Periods && periodYear && payments){
    alert("Please leave one field blank")
  }

  //Mix and match errors
  if(!years.value){
    count+=1
  }
  if(!amount.value){
    count+=1
  }
  if(!Fvamount.value){
    count+=1
  }
 if(!interest.value){
   count+=1
 }
 if(!Periods){
   count+=1
 }
 if(!payments){
   count+=1
 }
 if (count>1){
   alert("Error")
 } 
  
  //error catch if interest field is blank
  if(!AccInterest){
    alert("Please input Interest")
  }
  //error catch if Period per year field is blank
  if(!Periods){
    alert("Please input Periods per year")
  }
  //Implentation to find payment
  if(!Pmt.value){

    //payment given PV
    if(Fvamount.value==0){
    result = principal1/PVIFA
    document.getElementById("type").textContent = "Payment";
    ans.value = Math.round(result*100)/100
    }
    //payment given FV
    else if (amount.value==0){
      result = principal2/FVIFA
      document.getElementById("type").textContent = "Payment";
      ans.value = Math.round(result*100)/100
    }
  }

  //Implementation to find years
  if(!years.value){
    //finding years given PV
    if(Fvamount.value==0){
      result = (-1*Math.log(1-(principal1/payments)*(AccInterest)))/Math.log(1+(AccInterest))
      document.getElementById("type").textContent = "Years";
      ans.value= Math.round(result*100)/100
    }
    //finding years given FV
    else if(amount.value==0){
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
    
  }

  //Finds future value
  if(!Fvamount.value){
    
    result = payments * FVIFA;
    document.getElementById("type").textContent = "Future Value"
    ans.value = Math.round(result*100)/100;
  }

 
    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader gif
    document.getElementById("loading").style.display = "none";
} 

