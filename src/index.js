// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const ramenName = document.getElementById("ramen-name");
const ramenRestaurant = document.getElementById("restaurant-name");
const ramenDetailPic = document.getElementById("detailed-image");
const ramenRating = document.getElementById("rating-display");
const ramenComment = document.getElementById("comment-display");
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => {
    ramens.forEach(ramen => {
        const ramenPic = document.createElement("img");
        ramenPic.src = ramen.image;
        ramenMenu.appendChild(ramenPic);
        ramenPic.addEventListener("click", () => displayRamen(ramen))
    })
    displayRamen(ramens[0]);
})

function displayRamen (ramen){
    ramenName.textContent = ramen.name;
    ramenRestaurant.textContent = ramen.restaurant;
    ramenDetailPic.src = ramen.image;
    ramenRating.textContent = ramen.rating;
    ramenComment.textContent = ramen.comment;
}

const ramenForm = document.getElementById("new-ramen");
ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRamenImageSrc = document.getElementById("new-image").value;
    const newRamenImage = document.createElement("img");
    newRamenImage.src = newRamenImageSrc;
    ramenMenu.appendChild(newRamenImage);
    const newRamenRestaurant = document.getElementById("new-restaurant").value;
    const newRamenName = document.getElementById("new-name").value;
    const newRamenRating = document.getElementById("new-rating").value;
    const newRamenComment = document.getElementById("new-comment").value;
    newRamenImage.addEventListener("click", () => {
        ramenName.textContent = newRamenName;
        ramenRestaurant.textContent = newRamenRestaurant;
        ramenDetailPic.src = newRamenImageSrc;
        ramenRating.textContent = newRamenRating;
        ramenComment.textContent = newRamenComment;
    })
})