class Listing
{
    constructor(name, images, description, contact, price, tags)
    {
        this.name = name
        this.images = images;
        this.description = description;
        this.contact = contact;
        this.price = price;
        this.tags = tags;
    }
}
let listings = 
[new Listing("couch", "couch.jpg", "this is the description for the couch", "189-3210-3217", 199, ["furniture", "electronics"]), 
new Listing("hammer1", "hammer.jpg", "this is the description for the hammer", "489-3110-3197", 19, ["furniture"]),
new Listing("hammer2", "hammer.jpg", "this is the description for the hammer", "489-3110-3197", 19, ["furniture"]),
new Listing("apple", "hammer.jpg", "this is the description for the hammer", "489-3110-3197", 19, ["furniture"]),
new Listing("hammer3", "hammer.jpg", "this is the description for the hammer", "489-3110-3197", 19, ["furniture"]),
new Listing("hammer4", "hammer.jpg", "this is the description for the hammer", "489-3110-3197", 19, ["furniture"])];
listings = JSON.parse(localStorage.getItem("myListings"));
console.log(listings);

var proButton = document.getElementById('homeButton');
proButton.addEventListener('click', function() {window.open("ColumbusList_home.html","_self")}); 

CreateListings()
function CreateListings(){ //loop through each listing and display it
    //GET LISTINGS//
var token = document.cookie;
console.log('usertoken: ' + token);
$(function () {
    $(function () {
        let userToken = token;

        let request = {
            "url": 'http://127.0.0.1:8000/current_user/listings',
            "method": "GET",
            "headers": { 'x-columbus-user-token': userToken},
        };

        $.ajax(request).done(function (successResponse) {
            console.log('Got your listings' + JSON.stringify(successResponse));
            for (i=0; i<successResponse.length; i++) {
                let allListings = JSON.parse(JSON.stringify(successResponse))[i];
                console.log(allListings);
                
                const currentDiv = document.getElementById("userListings");
                const child = document.createElement("div");
                child.innerHTML = `<div class="listing"> 
                <h3 id="lName">${allListings.record.title}</h3>
                <img src=${allListings.record.images} id="lImage">
                <p id="lDescription">
                    ${allListings.record.description}
                </p>
                <p id="lContact>
                    ${allListings.record.contact}
                </p>
                <p id="lPrice>$${allListings.record.price}</p>
                
                </div>`;
                
                currentDiv.appendChild(child);
                let btn = document.createElement("button");
                btn.innerHTML = "Delete listing";
                btn.onclick = function () {deleteListing(allListings.id)};
                currentDiv.appendChild(btn);
                let patchbtn = document.createElement("button");
                patchbtn.innerHTML = "Increase price";
                patchbtn.onclick = function () {patchListing(allListings.id, allListings.record.price)};
                currentDiv.appendChild(patchbtn);
                let redbtn = document.createElement("button");
                redbtn.innerHTML = "Reduce price";
                redbtn.onclick = function () {redListing(allListings.id, allListings.record.price)};
                currentDiv.appendChild(redbtn);
            }
        }).fail(function (failureResponse) {
            console.log('Did not get listings');
        });
    })
})
}


let yourName = document.getElementById('yourName');
let email = localStorage.getItem('userEmail');
yourName.innerHTML = 'Name: ' + localStorage.getItem('userEmail').substring(0, email.length - 13);
let yourEmail = document.getElementById('yourEmail');
yourEmail.innerHTML = 'Email: ' + localStorage.getItem('userEmail');

var userID = [];
function deleteListing(id) {

    //Delete LISTING//
    
let ID = id;
$(function () {
    $(function () {
        let userToken = document.cookie;
        
        let request = {
            "url": 'http://127.0.0.1:8000/listings/' + JSON.stringify(ID),
            "method": "DELETE",
            "headers": { 'x-columbus-user-token': userToken},
        };

        $.ajax(request).done(function (successResponse) {
            console.log('Deleted');
            
        }).fail(function (failureResponse) {
            console.log('Did not delete');
        });
    })
})
}

function patchListing(id, money) {
let newPrice = {
    price: [money[0] + 10, money[1]]
};
let price = JSON.stringify(newPrice);
    
let ID = id;
$(function () {
    $(function () {
        let userToken = document.cookie;
        
        let request = {
            "url": 'http://127.0.0.1:8000/listings/' + JSON.stringify(ID),
            "method": "PATCH",
            "headers": { 'x-columbus-user-token': userToken},
            "contentType": "application/json",
            "data": price,
        };

        $.ajax(request).done(function (successResponse) {
            console.log('Patched');
            
        }).fail(function (failureResponse) {
            console.log('Not patched');
        });
    })
})
}

function redListing(id, money) {
    let newPrice = {
        price: [money[0] - 10, money[1]]
    };
    let price = JSON.stringify(newPrice);
        
    let ID = id;
    $(function () {
        $(function () {
            let userToken = document.cookie;
            
            let request = {
                "url": 'http://127.0.0.1:8000/listings/' + JSON.stringify(ID),
                "method": "PATCH",
                "headers": { 'x-columbus-user-token': userToken},
                "contentType": "application/json",
                "data": price,
            };
    
            $.ajax(request).done(function (successResponse) {
                console.log('Patched');
                
            }).fail(function (failureResponse) {
                console.log('Not patched');
            });
        })
    })
    }

// function Remove(listing)
// {
//     for( var i = 0; i < listings.length; i++){ 
    
//         if ( listings[i].name == listing.name) { 
    
//             listings.splice(i, 1); 
//         }
    
//     };
//     ClearListings();
//     CreateListings();
// }
// function ChangePrice(listing, price)
// {
//     for( var i = 0; i < listings.length; i++){ 
    
//         if ( listings[i].name == listing.name) { 
    
//             listings[i].price = price;
//         }
    
//     };
//     ClearListings();
//     CreateListings();
// }
// function ClearListings(){
//     const currentDiv = document.getElementById("listings");
//     currentDiv.innerHTML = "";
// }
