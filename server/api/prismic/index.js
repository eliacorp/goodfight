"use strict"

let request = require('request');
let fs = require('fs');
// let Prismic = require('prismic-nodejs');
var Prismic = require('prismic-javascript');

const ENDPOINT = "https://jessicaschuster.cdn.prismic.io/api";
const ACCESSTOKEN = 'MC5XaTdtX0NZQUFOWWRxNklP.77-977-977-9Ru-_vR_vv71B77-9ZE7vv70j77-977-9aUJMWCnvv73vv71z77-977-977-977-9Xe-_ve-_vXJo'; // Only if your API is private




// Initialize the prismic.io api
function initApi(req) {
  return Prismic.getApi(ENDPOINT, {
    accessToken: ACCESSTOKEN,
    req: req
  });
}

exports.getAll = function (req, res) {
  var page = req.query.page;
  var type= req.query.type;
  console.log(type);
  console.log("page:",page);

  initApi(req).then(function(api){
    api.query(
        Prismic.Predicates.at('document.type', type),
        { orderings : '[my.'+type+'.date desc]', pageSize : 3, page : page }
      ).then(function(response) {
        res.status(200).json(response);
          // response is the response object, response.results holds the documents
      },function(err) {
        res.status(err.status).json(err);
        console.log(err);
          // response is the response object, response.results holds the documents
      });
  });

};




// Prismic.Api('https://aleali.cdn.prismic.io/api', function (err, Api) {
//     Api.form('everything')
//         .ref(Api.master())
//         .query(Prismic.Predicates.at('document.type', type))
//         .orderings('[my.'+type+'.date desc]')
//         .pageSize(5)
//         .page(page)
//         .submit(function (err, response) {
//
//
//           console.log("getAll");
//
//           console.log(response);
//
//             res.status(200).json(response);
//
//         });
//   });




















exports.getSingle = function (req, res) {
  var type = req.query.type;
  var uid = req.query.uid;
  var queryString;
  queryString ='my.'+type+'.uid';

  console.log("getSingle", queryString, uid);

  initApi(req).then(function(api){
    api.query(
        Prismic.Predicates.at(queryString, uid)
      ).then(function(response) {
        console.log(response);
         res.status(200).json(response.results[0]);
       },function(err) {
         res.status(err.status).json(err);
         console.log(err);
       });
  });




  // Prismic.Api('https://aleali.cdn.prismic.io/api', function (err, Api) {
  //
  //     Api.form('everything')
  //         .ref(Api.master())
  //         .query(Prismic.Predicates.at(queryString, uid))
  //         .submit(function (err, response) {
  //           console.log(err);
  //           console.log(response);
  //           res.status(200).json(response.results[0]);
  //
  //         });
  //   });

};




exports.getType = function (req, res) {



  Prismic.Api(ENDPOINT, function (err, Api) {
      Api.form('everything')
          .ref(Api.master())
          .query(Prismic.Predicates.at("document.type", type))
          .orderings('['+orderField+']')
          .pageSize(100)
          .submit(function (err, response) {

              response.results;
              console.log($rootScope.Styling);
              $rootScope.$broadcast('stylingReady');
              // $rootScope.$apply();


              // The documents object contains a Response object with all documents of type "product".
              var page = response.page; // The current page number, the first one being 1
              var results = response.results; // An array containing the results of the current page;
              // you may need to retrieve more pages to get all results
              var prev_page = response.prev_page; // the URL of the previous page (may be null)
              var next_page = response.next_page; // the URL of the next page (may be null)
              var results_per_page = response.results_per_page; // max number of results per page
              var results_size = response.results_size; // the size of the current page
              var total_pages = response.total_pages; // the number of pages
              var total_results_size = response.total_results_size; // the total size of results across all pages
              return results;
              $rootScope.$apply();
          });
    });

};
