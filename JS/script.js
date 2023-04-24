// Scrolling Btn - Progress Bar
const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

const scrollProgressBar = () => {
    let scrollDistance = -(section.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (section.getBoundingClientRect().height -
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);

// Hide/Show Button
let toTopButton = document.querySelector(".scrollBtn");

window.onscroll = function() { showButton() };

function showButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}


// Projects Array

const projects = [{
        // First Project - Foodblog
        name: "Foodblog",
        img: "foodblog.jpg",
        url: "Projects/Foodblog"
    },
    {
        // Restaurant - typescript
        name: "Restaurant WildFood",
        img: "restaurant.png",
        url: "Projects/Restaurant-WildFood/pages"
    },
    {
        // Car-Rental - Angular Project
        name: "Unique - Car Rental",
        img: "car-rental.jpg",
        url: "Projects/car-rental"
    },
    {
        // Library - PHP
        name: "Vienna City Library",
        img: "library1.png",
        url: "path"
    },
    {
        // Angular (E-commerce) - Flower Shop
        name: "flùr - Flower shop",
        img: "flur.png",
        url: "Projects/flower-shop"
    }

]

// Print projects

let projectRow = document.getElementById("portfolio");

for (let project of projects) {
    projectRow.innerHTML += `<div class="item col mb-3">
    <img class="portfolio_image" src="../images/${project.img}" alt="">
    <div class="description">
        <h4>${project.name}</h4>
        <a class="live-site" href="${project.url}" target="_blank">See Live Site</a>
    </div>
</div>`

}