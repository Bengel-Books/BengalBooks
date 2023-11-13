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


//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
// function CreateListings(){ //loop through each listing and display it
//     //GET LISTINGS//
//     //var token = document.cookie;
//     //console.log('usertoken: ' + token);
//     $(function () {
//         $(function () {
//             // let userToken = token;

//             // let request = {
//             //     "url": 'http://127.0.0.1:8000/listings',
//             //     "method": "GET",
//             //     "headers": { 'x-columbus-user-token': userToken},
//             // };

//             $.ajax(request).done(function (successResponse) {
//                 console.log('Got listings' + JSON.stringify(successResponse));
//                 for (i=0; i<successResponse.length; i++) {
//                     let allListings = JSON.parse(JSON.stringify(successResponse))[i];
//                     console.log(allListings);
//                     listings.push(new Listing(allListings.record.title, allListings.record.images, allListings.record.description, allListings.record.contact, allListings.record.price[0], allListings.record.tags));
//                     const currentDiv = document.getElementById("listings");
//                     const child = document.createElement("div");
//                     child.innerHTML = `<div class="listing"> 
//                     <h3 id="lName">${allListings.record.title}</h3>
//                     <img src=${allListings.record.images} id="lImage">
//                     <p id="lDescription">
//                         ${allListings.record.description}
//                     </p>
//                     <p id="lContact>
//                         ${allListings.record.contact}
//                     </p>
//                     <p id="lPrice>$${allListings.record.price[0] + allListings.record.price[1] / 100}</p>
                    
//                     </div>`;
                    
//                     currentDiv.appendChild(child);
//                     let btn = document.createElement("button");
//                     btn.innerHTML = "Add to Wishlist";
//                     btn.onclick = function () {makeWishlist(allListings.record.owner, allListings.id);AddToWishlist(new Listing(allListings.record.title, allListings.record.images, allListings.record.description, allListings.record.contact, allListings.record.price[0], allListings.record.tags));};

//                     currentDiv.appendChild(btn);
//                 }
//                 console.log(listings);

//             }).fail(function (failureResponse) {
//                 console.log('Did not get listings');
//             });
//         })
//     })
    
// }
// function SortByName(){
//     listings.sort((a, b) => (a.name > b.name) ? 1 : -1);
//     ClearListings();
//     ShowListings(listings);
// }
// function SortByPrice(){
//     listings.sort((a, b) => (a.price > b.price) ? 1 : -1);
//     ClearListings();
//     ShowListings(listings);
// }

// function SearchByTag(){
//     tagName = document.getElementById("tagName").value;
//     foundListings = [];
//     listings.forEach(listing => {
//         tags = listing.tags;
//         tags.forEach(tag =>{
//             if (tag == tagName){
//                 foundListings.push(listing);
//             }
//         })
//     });
//     ClearListings();
//     ShowListings(foundListings);
// }
// function SortByRecent(){
//     ClearListings();
//     ShowListings(tempListings);
// }

// function PostWishlistItem(name, price, description) //FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXX--------------------------
// {
//     let listingOwner = userEmail;
//         let listingName = name;
//         let listingPrice = [parseInt(price),parseInt((Number(price) - parseInt(price)) * 100)];
//         let listingDes = description;
//         let listingImg = [[0],[0]];
//         var listing = {
//             "id": 1,
//             "owner": listingOwner,
//             "title": listingName,
//             "description": listingDes,
//             "images": listingImg,
//         };
//         console.log(listing);

//         $(function () {
//             $(function () {
//                 let userToken = document.cookie;
    
//                 let request = {
//                     "url": "http://127.0.0.1:8000/current_user/wishlist",
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
// }

// function AddToWishlist(listing){
//     wishlist.push(listing);
//     PostWishlistItem(listing.name, listing.price, listing.description); 
    
//     UpdateWishlist();
// }

// function UpdateWishlist(){
//     const currentDiv = document.getElementById("wishlist");
//     ClearWishlist();
//     let num=0;
//     wishlist.forEach(listing => {
//         const child = document.createElement("div");
//         child.innerHTML = `<p>${listing.name}</p> 
//         `;
//         const child2 = document.createElement("button");
//         child2.innerHTML = "remove";
//         child2.onclick = function () {RemoveFromWishlist(num);};
//         num = num + 1;
//         child.appendChild(child2);
//         currentDiv.appendChild(child);
//     })
//     //PostWishlistInfo(wishlist)
    
// }

// function PostWishlistInfo(wishlist)
// { //send the wishlist info to the database

// }
// function GetWishlistInfo()
// {//GETs the wishlist info using the user token??

// }

// function RemoveFromWishlist(number){
//     wishlist.splice(number - 1, 1);
//     console.log("item "+ number + " removed");
//     UpdateWishlist();
// }

// function ClearWishlist(){
//     document.getElementById("wishlist").innerHTML = `<h3>Wish List</h3>`;
// }


// //CREATE WISHLIST//
//   function makeWishlist(mail, iD) {
//   $(function(){ 
//         $(function () {
//             $(function () {
//                 let aListing = {
//                     "user_email": mail,
//                     "listing_id": iD
//                 }
//                 let listing = JSON.stringify(aListing);
//                 console.log(listing);
//                 let userToken = document.cookie;
    
//                 let request = {
//                     "url": "http://127.0.0.1:8000/current_user/wishlist",
//                     "headers": { 'x-columbus-user-token': userToken},
//                     "method": "POST",
//                     "contentType": "application/json",
//                     "data": listing
//                 };
    
//                 $.ajax(request).done(function (successResponse) {
//                     console.log("You made a wishlist");
//                     // Save the token and use it for future requests!
//                 }).fail(function (failureResponse) {
//                     console.log("No wishlist");
//                 });
//             })
//         })

//   });
// }

// $('#wish').click(function(){ 
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
//                       let list = JSON.parse(JSON.stringify(successResponse))[0];
//                       alert('Wishlist: ' + list.record.user_email + " id:" + list.id);
                    
//                       // Save the token and use it for future requests!
//                   }).fail(function (failureResponse) {
//                       console.log("You did not get your wishlist");
//                   });
//               })
//           })
  
//     });