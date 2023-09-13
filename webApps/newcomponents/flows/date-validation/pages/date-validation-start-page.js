define([], () => {
  'use strict';

  class PageModule {

// code for sysdate


 







  //  code for disable future date
addDate(){
    var currentDate = new Date();
    var futureDate = new Date();
    // Increase the number of days -- 10 days in this example
    futureDate.setDate( currentDate.getDate() + 7 );
    return futureDate;
  }

//  code for disable past date

    minusDate(){
    var currentDate = new Date();
    var pastDate = new Date();
    // Decrease the number of days -- 10 days in this example
    pastDate.setDate( currentDate.getDate() - 7 );
    return pastDate;
  }
  
 
//     sysdate() {
//   var now = new Date();
//   var year = now.getFullYear();
//   var month = now.getMonth() + 1;
//   var day = now.getDate();
//   var hour = now.getHours();
//   var minute = now.getMinutes();
//   var second = now.getSeconds();



//   var currentDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  
// //console.log(sysdate()); // prints: "2021-10-21 17:37:53"
//   return currentDate;
// }


   pageSysDates() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd; 
    return today;
  };




// minus one month from  from sysdate

   getSysdate() {

  var today = new Date();

  today.setMonth(today.getMonth() - 1); // Subtract one month

  var dd = String(today.getDate()).padStart(2, '0');

  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return today;

}



// minus add month from  from sysdate

  nextMonthSysdate() {

  var today = new Date();

  today.setMonth(today.getMonth() + 1); // add  one month

  var dd = String(today.getDate()).padStart(2, '0');

  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return today;

}


  previousMonthSysdate() {

  var today = new Date();

  today.setMonth(today.getMonth() - 1); // add  one month

  var dd = String(today.getDate()).padStart(2, '0');

  var mm = String(today.getMonth() - 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return today;

}



 nextdaySysdate() {

  var today = new Date();

  today.setDate(today.getDate() + 1); // add  one day

  var dd = String(today.getDate() ).padStart(2, '0');

  var mm = String(today.getMonth() ).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return today;

}



// nextyearSysdate() {
//   var today = new Date();
//   today.setFullYear(today.getFullYear() - 1); // Subtract one year
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();
//   today = yyyy + '-' + mm + '-' + dd;
//   return today;
// }





// JavaScript program to illustrate 
    // calculation of no. of days between two date 

      noOfDaysBtnTwoDays(startdate,enddate){
    // To set two dates to two variables

    var difference_In_Time = 0;
     var difference_In_Days =0;

    var date1 = new Date(startdate);
    var date2 = new Date(enddate);
      
    // To calculate the time difference of two dates
    var difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
      
    //To display the final no. of days (result)
    console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + difference_In_Days);
               
return difference_In_Days ;

      }








  }
  
  return PageModule;
});
