class Listing //
{
    constructor(name, images, description, stock=5, status='available', reviews=['Steve: nice | 7/10','Raj: good | 8/10'])
    {
        this.name = name
        this.images = images;
        this.description = description;
        this.stock = stock;
        this.status = status;
        this.reviews = reviews;
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
var tempListings = []; //temporary listings for use by sort by recency button
let wishlist = [listings[0]];
let book = listings[0];
var currindex = 0;

const homeUrl = window.location.href;

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
        <button type="button" id="button${i}" onclick="bookPage(${i})">Overview!</button>

        </div>`;
        
        currentDiv.appendChild(child);
        
    }
    console.log(listings);
}
if (homeUrl.includes("homePage.html")) {
    console.log(homeUrl);
    var proButton = document.getElementById('profileButton');
    proButton.addEventListener('click', function() {window.open("profile.html","_self")}); 

    makeListings()
}

function bookPage(index) {
    sessionStorage.setItem("index", index);
    sessionStorage.setItem("listings", JSON.stringify(listings));
    window.open("book.html","_self");
    
}

function searchBookPage(index) {
    sessionStorage.setItem("index", index);
    sessionStorage.setItem("listings", JSON.stringify(tempListings));
    window.open("book.html","_self");
    
}

if (homeUrl.includes("book.html")) {
    console.log(homeUrl);
    let books = JSON.parse(sessionStorage.getItem("listings"));
    console.log(books);
    let book = books[sessionStorage.getItem("index")];
    console.log(book);
    var homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {window.open("homePage.html","_self")}); 
    
    overview(book);

    

}

function overview(book) {
    console.log(book.name);
    let reviews = "<ul id=\"reviewList\">";
    let i = 0;
    while (i < book.reviews.length) {
        reviews = reviews.concat("<li>" + book.reviews[i] + "</li>");
        i++;
    }
    reviews = reviews.concat("</ul>")
    console.log(reviews);
    const currentDiv = document.getElementById("overview");
    const child = document.createElement("div");
    child.innerHTML = `<div class="overview"> 
    <h3>${book.name}</h3>
    <img src=${book.images} height=100 width=100>
    <p>
        Status: ${book.status}<br>
        Stock: ${book.stock}<br><br>
        Description: ${book.description}
    </p>
    </div>`;
    
    currentDiv.appendChild(child);

    const reviewDiv = document.getElementById("review");
    const child2 = document.createElement("div");
    child2.innerHTML = `<div class="review"> 
    <p id="reviewP">    
        Reviews:${(reviews)}
    </p>
    </div>
    </div>`;
    
    reviewDiv.appendChild(child2);

    
    console.log(book);
}

function PopupReview(){
    
    let currentDiv = document.getElementById("newReview");
    let child = document.createElement("div");
    child.innerHTML = `
    <div class="review", id="newerReview">
    <h3>Enter Review</h3>
    <input id="comment">
    <label for="comment">Comment</label>
    <input id="rating">
    <label for="rating">Rate</label>
    <input id="username">
    <label for="username">Name</label>
    <button onClick="saveReview()" id="submitBtn">Submit</button>
    </div>
    `;
    if(document.getElementById("newerReview") != null) {
        return;
    }
    currentDiv.appendChild(child);
}

function orderBook(){
    let newDiv = document.getElementById("neworder");
    let newchild = document.createElement("div");
    newchild.innerHTML = `
    <div class="order", id="newerorder">
    <h3>Order Book!</h3>
    <input id="date" type="date">
    <label for="date">today's date</label><br>
    <input id="time" type="time">
    <label for="date">today's date</label><br>
    <button onClick="confirmOrder()" id="orderBtn">Order</button>
    </div>
    `;
    if(document.getElementById("newerorder") != null) {
        return;
    }
    newDiv.appendChild(newchild);
}

function confirmOrder(){
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value
    console.log(date + " " + time);
    var someDate = new Date(date + " " + time);
    var numberOfDaysToAdd = 12;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    console.log(new Date(result))
    alert("Book is due on " + new Date(result));
    window.open("checkout.html","_self")
}

function saveReview(){
    let username = document.getElementById("username").value;
    let comment = document.getElementById("comment").value;
    let rating = document.getElementById("rating").value;
    let books = JSON.parse(sessionStorage.getItem("listings"));
    console.log(books);
    console.log(comment);
    let book = books[sessionStorage.getItem("index")];
    book.reviews.push(username + ": " + comment + " | " + rating + "/10");

    let reviews = "";
    let i = 0;
    while (i < book.reviews.length) {
        reviews = reviews.concat("<li>" + book.reviews[i] + "</li>");
        i++;
    }

    const reviewDiv = document.getElementById("reviewList");
    reviewDiv.innerHTML = reviews;
    
    document.getElementById("newerReview").remove();
}

function Search(){ //for search bar
    thingToSearch = document.getElementById("searchInput").value;
    console.log(thingToSearch);
    foundListings = [];
    let currListings = listings;
    
    if (homeUrl.includes("homePage.html")) {
        currListings = listings;
    }else if (homeUrl.includes("profile.html")) {
        currListings = wishlist;
    }
    currListings.forEach(listing => {
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
    tempListings = listingsToShow;
    for (i=0; i<listingsToShow.length; i++) {
        let curListing = listingsToShow[i];
        const currentDiv = document.getElementById("listings");
        const child = document.createElement("div");
        child.innerHTML = `<div class="listing"> 
        <h3 id="lName">${curListing.name}</h3>
        <img src=${curListing.images} height=100 width=100 id="lImage">
        <p id="lDescription">
            ${curListing.description}
        </p>
        <button type="button" id="button${i}2" onclick="searchBookPage(${i})">Overview!</button>

        </div>`;
        
        currentDiv.appendChild(child);
        
    }
    
}

function ClearListings(){
    const currentDiv = document.getElementById("listings");
    currentDiv.innerHTML = "";
}





