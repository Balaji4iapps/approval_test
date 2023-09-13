define([], () => {
  'use strict';

  class PageModule {

   getSystemDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 as months are zero-based
  var day = String(currentDate.getDate()).padStart(2, '0');
  var hours = String(currentDate.getHours()).padStart(2, '0');
  var minutes = String(currentDate.getMinutes()).padStart(2, '0');
  var seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
  var formattedDate = year + '-' + month + '-' + day ;
  
  //+ ' ' + hours + ':' + minutes + ':' + seconds;
  return formattedDate;
}

  







// insert function above the code

  }
  
  return PageModule;
});
