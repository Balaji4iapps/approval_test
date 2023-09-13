define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

 

  var PageModule = function PageModule() {};

 

    PageModule.prototype.pagingSearchData = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'cloud_id'
        }));
      return data;
    };

  PageModule.prototype.convertArrayToString = function(arr) {
  return arr.join(', ');
};


  return PageModule;
});