class Listing //
{
    constructor(name, images, description)
    {
        this.name = name
        this.images = images;
        this.description = description;
    }
}
let tempBooks = ["books/Ai_pearson.jpg","books/classix.jpeg"];
let tempTitles = [
    "Artificial Intelligence: A Modern Approach",
    "Artificial Intelligence Textbook For Class IX"
];
let tempDesc = [
    "Explores the full breadth and depth of the field of artificialintelligence (AI)",
    "Be the leading thinkers in the Age of Machine Intelligence"   
]
let listings = [];
let tempListings = listings; //temporary listings for use by sort by recency button
let wishlist = [];

function makeListings() {
    for (i=0; i<tempBooks.length; i++) {
        listings.push(new Listing(tempTitles[i], tempBooks[i], tempDesc[i]));
        const currentDiv = document.getElementById("listings");
        const child = document.createElement("div");
        child.innerHTML = `<div class="listing"> 
        <h3 id="lName">${tempTitles[i]}</h3>
        <img src=${tempBooks[i]} height=100 width=100 id="lImage">
        <p id="lDescription">
            ${tempDesc[i]}
        </p>
        </div>`;
        
        currentDiv.appendChild(child);
        let btn = document.createElement("button");
        btn.innerHTML = "Overview";
        btn.onclick = function () {window.open("profile.html","_self")};
    
        currentDiv.appendChild(btn);
    }
    console.log(listings);
}

makeListings()



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

function Search(){ //for search bar
    thingToSearch = document.getElementById("searchInput").value;
    console.log(thingToSearch);
    foundListings = [];
    listings.forEach(listing => {
        n = listing.name;
        
        b = n.toLowerCase().includes(thingToSearch.toLowerCase());
        if (b){
            foundListings.push(listing);
        }
    });
    ClearListings();
    ShowListings(foundListings);
}

$("#searchBar").on("change keyup paste", function(){
    Search();
    console.log("Search Called!");
});

function ShowListings(listingsToShow){
    listingsToShow.forEach(listing => {
        console.log(listing.name);
        const currentDiv = document.getElementById("listings");
        const child = document.createElement("div");
        child.innerHTML = `<div class="listing"> 
        <h3>${listing.name}</h3>
        <img src=${listing.images} height=100 width=100>
        <p>
            ${listing.description}
        </p>
        </div>`;
        
        currentDiv.appendChild(child);
        // let btn = document.createElement("button");
        // btn.innerHTML = "Add to Wishlist";
        // btn.onclick = function () {AddToWishlist(listing);};
        // currentDiv.appendChild(btn);
    })
}

function ClearListings(){
    const currentDiv = document.getElementById("listings");
    currentDiv.innerHTML = "";
}

var proButton = document.getElementById('profileButton');
proButton.addEventListener('click', function() {window.open("profile.html","_self")}); 

var homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function() {window.open("homePage.html","_self")}); 

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
