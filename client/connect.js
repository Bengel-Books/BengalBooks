// //GET CURRENT USER EMAIL//
// $(function () {
//     $(function () {
//         let userToken = token;

//         let request = {
//             "url": 'http://127.0.0.1:8000/current_user',
//             "method": "GET",
//             "headers": { 'x-columbus-user-token': userToken},
//         };

//         $.ajax(request).done(function (successResponse) {
//             console.log('Got user email');
//             localStorage.clear();
//             localStorage.setItem("userEmail",successResponse);
//         }).fail(function (failureResponse) {
//             console.log('no user email :(');
//             $("#root").html(`Error: ${failureResponse.responseText}`);
//         });
//     })
// })
// var userEmail = localStorage.getItem("userEmail");
// console.log(userEmail);

// //GET LISTINGS//
// var token = document.cookie;
// console.log('usertoken: ' + token);
// $(function () {
//     $(function () {
//         let userToken = token;

//         let request = {
//             "url": 'http://127.0.0.1:8000/listings',
//             "method": "GET",
//             "headers": { 'x-columbus-user-token': userToken},
//         };

//         $.ajax(request).done(function (successResponse) {
//             console.log('Got listings' + JSON.stringify(successResponse));
//             for (i=0; i<successResponse.length; i++) {
//                 let allListings = JSON.parse(JSON.stringify(successResponse))[i];
//                 console.log(allListings);
//                 let listingTitle = allListings.record.title;
//             }
//         }).fail(function (failureResponse) {
//             console.log('Did not get listings');
//         });
//     })
// })

// //GET USER LISTINGS//
// $(function () {
//     $(function () {
//         let userToken = token;

//         let request = {
//             "url": 'http://127.0.0.1:8000/current_user/listings',
//             "method": "GET",
//             "headers": { 'x-columbus-user-token': userToken},
//         };

//         $.ajax(request).done(function (successResponse) {
//             console.log('Got current user listings: ' + JSON.stringify(successResponse));
            
//         }).fail(function (failureResponse) {
//             console.log('Did not get current user listings');
//         });
//     })
// })

// //GET LISTINGS BY OWNER//
// $(function () {
//     $(function () {
//         let userToken = token;

//         let request = {
//             "url": "http://127.0.0.1:8000/users/" + userEmail + "/listings",
//             "method": "GET",
//             "headers": { 'x-columbus-user-token': userToken},
//         };

//         $.ajax(request).done(function (successResponse) {
//             console.log('Got by owner: ' + JSON.stringify(successResponse));
//         }).fail(function (failureResponse) {
//             console.log('No by owner :(');
//         });
//     })
// })

// //GET LISTINGS BY TAG//
// $(function () {
//     $(function () {
//         let userToken = token;

//         let request = {
//             "url": 'http://127.0.0.1:8000/listings/by_tags?search_mode=OR&tag=transportation&tag=bike',
//             "method": "GET",
//             "headers": { 'x-columbus-user-token': userToken},
//             //"query": "/listings/by_tags?search_mode=OR&tag=transportation&tag=bike"
//         };

//         $.ajax(request).done(function (successResponse) {
//             console.log('Got listings by tag');
            
//         }).fail(function (failureResponse) {
//             console.log('Did not get listings by tag');
//         });
//     })
// })



// //CREATE LISTING//


// //CREATE LISTING//
//   $('#subForm').submit(function(e){ 
//     e.preventDefault();
//     $(function(){
//         let listingOwner = userEmail;
//         let listingName = document.getElementById('listingName').value;
//         let listingPrice = [0,0];
//         let listingDes = document.getElementById('description').value;
//         let listingImg = [[0],[0]];
//         let listingContact = userEmail;
//         let listingTags = [''];
//         var listing = {
//             "id": 1,
//             "owner": listingOwner,
//             "title": listingName,
//             "description": listingDes,
//             "images": listingImg,
//             "price": listingPrice,
//             "contact": listingContact,
//             "tags": listingTags
//         };
//         console.log(listing);

//         $(function () {
//             $(function () {
//                 let userToken = document.cookie;
    
//                 let request = {
//                     "url": "http://127.0.0.1:8000/current_user/listings/create",
//                     "headers": { 'x-columbus-user-token': userToken},
//                     "method": "POST",
//                     "contentType": "application/json",
//                     "data": JSON.stringify(listing),
//                 };
    
//                 $.ajax(request).done(function (successResponse) {
//                     console.log("You did it");
//                     // Save the token and use it for future requests!
//                 }).fail(function (failureResponse) {
//                     console.log("Noooo");
//                 });
//             })
//         })
//     })

//   });

  


//   function showDiv()
// {
//     let divStyle = document.getElementById("newListing2");
//     divStyle.style.display = "block";
// }

// function getWishlist() {
//     $(function(){ 
//           $(function () {
//               $(function () {
//                   let userToken = document.cookie;
      
//                   let request = {
//                       "url": "http://127.0.0.1:8000/current_user/wishlist",
//                       "headers": { 'x-columbus-user-token': userToken},
//                       "method": "GET",
//                   };
      
//                   $.ajax(request).done(function (successResponse) {
//                       console.log("You got your wishlist");
//                       // Save the token and use it for future requests!
//                   }).fail(function (failureResponse) {
//                       console.log("You did not get your wishlist");
//                   });
//               })
//           })
  
//     });
//   }