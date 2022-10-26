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


// Portfolio Loop

const projects = [{
        name: "Foodblog",
        img: "foodblog.jpg",
        url: "path"
    },
    {
        name: "Restaurant Website",
        img: "restaurant.jpg",
        url: "path"
    },
    {
        name: "Angular Project",
        img: "angular.jpg",
        url: "path"
    },
    {
        name: "Car Rental",
        img: "car-rental.jpg",
        url: "path"
    }
]