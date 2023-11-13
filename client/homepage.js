class Listing //
{
    constructor(name, images, description, stock=5, status='available', reviews=['nice','good'])
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
let tempListings = listings; //temporary listings for use by sort by recency button
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
        // let btn = document.createElement("button");
        // btn.innerHTML = "Overview";
        // btn.onclick = function () {window.open("book.html","_self");};
    
        // currentDiv.appendChild(btn);
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
    
    // overview(currbook);
    // console.log(currbook);
    // console.log(index);
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

    function PopupReview(){
        const currentDiv = document.getElementById("newReview");
        const child = document.createElement("div");
        child.innerHTML = `
        <div class="review", id="newerReview">
        <h3>Enter Review</h3>
        <input id="comment">
        <label for="comment">Comment</label>
        <input id="rating">
        <label for="rating">Rate</label>
        <input id="username">
        <label for="username">Name</label>
        <button onClick="GetListingInputs()" id="submitBtn">Submit</button>
        </div>
        `;
        currentDiv.appendChild(child);
    }
    
    function saveReview(){
        username = document.getElementById("username").value;
        comment = document.getElementById("comment").value;
        rating = document.getElementById("rating").value;
        document.getElementById("newerListing").remove();
    }

}

function overview(book) {
    console.log(book.name);
    let reviews = "<ul>";
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
    <p>    
        Reviews:${(reviews)}
    </p>
    </div>
    </div>`;
    
    reviewDiv.appendChild(child2);
    // let btn = document.createElement("button");
    // btn.innerHTML = "Add to Wishlist";
    // btn.onclick = function () {AddToWishlist(listing);};
    // currentDiv.appendChild(btn);

    
    console.log(book);
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





