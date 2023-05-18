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
        // Angular (E-commerce) - Flower Shop
        name: "flùr - Flower shop",
        img: "flur.png",
        url: "Projects/flower-shop"
    },
    {
        // Restaurant - typescript
        name: "WildFood - Restaurant",
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
        // First Project - Foodblog
        name: "Foodblog",
        img: "foodblog.jpg",
        url: "Projects/Foodblog"
    }
]

// Print projects
let projectRow = document.getElementById("portfolio");

for (let project of projects) {
    projectRow.innerHTML += `<div class="item col mb-3">
    <img class="portfolio_image" src="images/${project.img}" alt="">
    <div class="description">
        <h4>${project.name}</h4>
        <a class="live-site" href="${project.url}" target="_blank">See Live Site</a>
    </div>
</div>`
}

//Portfolio section for smaller screens:
var items = document.querySelectorAll('.item');

if (window.innerWidth <= 768) {
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('click-effect');
            var description = item.querySelector('.description');

            if (item.classList.contains('click-effect')) {
                description.style.visibility = "visible";
                item.style.transform = "scale(1)";
                description.querySelectorAll('*').forEach(function(el) {
                    el.style.transform = "translateY(0)";
                });

            } else {
                description.style.visibility = "hidden";
                item.style.transform = "scale(1)";
                description.querySelectorAll('*').forEach(function(el) {
                    el.style.transform = "translateY(30px)";
                });
            }
        })
    })
}

//Technologie array
const technologies = [{
        name: 'html5',
        icon: 'fa-html5',
    },
    {
        name: 'css',
        icon: 'fa-css3-alt',
    },
    {
        name: 'scss',
        icon: 'fa-sass',
    },
    {
        name: 'Bootstrap',
        icon: 'fa-bootstrap',
    },
    {
        name: 'Javascript',
        icon: 'fa-square-js',
    },
    {
        name: 'angular',
        icon: 'fa-angular',
    },
    {
        name: 'php',
        icon: 'fa-php',
    },
    {
        name: 'symfony',
        icon: 'fa-symfony',
    }
]

//Print technologies
let techRow = document.getElementById("tech");
for (let tech of technologies) {
    techRow.innerHTML += `<div class="text-center"><i class="fa-brands ${tech.icon} fs-2"></i>
    <p>${tech.name}</p>
</div>`;
}

//Show phone number for small screens
var phoneLink = document.getElementById("phone-link");
phoneLink.addEventListener("click", function() {
    phoneLink.classList.toggle("clicked");
    // If the link is clicked and the clicked class is present, show the phone number
    if (phoneLink.classList.contains("clicked")) {
        phoneLink.querySelector(".phone-number").style.display = "inline";
    } else {
        phoneLink.querySelector(".phone-number").style.display = "none";
    }
});