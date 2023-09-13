define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

 

  var PageModule = function PageModule() {};

  PageModule.prototype.convertJSON = function(jsonObject) {
  // Extract the required properties and reformat the date
  const {
    cloud_name,
    cloud_provider,
    contact_number,
    email_id,
    founder_name,
    started_year,
    business_type
  } = jsonObject;

  const formattedStartedYear = new Date(started_year).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');

  // Create a new object with the desired format
  const convertedObj = {
    cloud_name,
    cloud_provider,
    contact_number,
    email_id,
    founder_name,
    started_year: formattedStartedYear,
    business_type: JSON.parse(business_type)
  };

  return convertedObj;
}

// Usage example:
// const jsonObject = {
//   "cloud_id": 420,
//   "cloud_name": "singh",
//   "cloud_provider": "G-india",
//   "email_id": "baktha@gmail.com",
//   "contact_number": "678",
//   "business_type": '["CHN","MDU","SLM"]',
//   "started_year": "0001-11-09T00:00:00Z",
//   "founder_name": "JB"
// };

const convertedObject = convertJSON(jsonObject);
console.log(convertedObject);


    // PageModule.prototype.pagingSearchData = function(array) {
    //   var data = new PagingDataProviderView(new ArrayDataProvider(
    //   array, {
    //     idAttribute: 'cloud_id'
    //     }));
    //   return data;
    // };

 
//  PageModule.prototype.arrayMethod = function(array) {
//   const parsedArray = JSON.parse(array);
//   const convertedString = parsedArray.join(",");
//   console.log(convertedString); // Output: CHN,MDU,SLM
//   return convertedString;
// };

// const value = "[\"CHN\",\"MDU\",\"SLM\"]";
// PageModule.prototype.arrayMethod(value);

// PageModule.prototype.arrayMethod = function(array) {
//   let convertedString = array.join(",");
//   console.log(convertedString); // Output: CHN,MDU,SLM
//   return convertedString;
// };

     
  return PageModule;
});