var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}

// document.addEventListener("DOMContentLoaded", function() {
//     function groupCards() {
//         const cardsContainer = document.querySelector('.cards');
//         const cards = Array.from(cardsContainer.children);
//         const newDivs = [];

//         // Clear existing card rows
//         cardsContainer.innerHTML = '';

//         if (window.innerWidth < 991) {
//             for (let i = 0; i < cards.length; i += 3) {
//                 const newDiv = document.createElement('div');
//                 newDiv.classList.add('card-row');
//                 cards.slice(i, i + 3).forEach(card => newDiv.appendChild(card));
//                 newDivs.push(newDiv);
//             }
//         } else {
//             newDivs.push(...cards);
//         }

//         newDivs.forEach(newDiv => cardsContainer.appendChild(newDiv));
//     }

//     // Initial grouping
//     groupCards();

//     // Re-group cards on window resize
//     window.addEventListener('resize', groupCards);
// });