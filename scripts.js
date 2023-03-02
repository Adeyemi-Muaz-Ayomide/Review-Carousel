//Local Reviews Data
const reviews = [
    {
        id: 1,
        name: 'Asiwaju Bola Ahmed Tinubu',
        occupation: 'Politician',
        image: 
                "Tinubu-img.webp",
        review: 
                'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora.'        
    },  
    {
        id: 2,
        name: 'Peter Drury',
        occupation: 'Commentator',
        image: 
                 'peter-drury.jpg',
        review: 
                'Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo suscipit sed vel esse repellat hic exercitationem perspiciatis.'        
    }, 
    {
        id: 3,
        name: 'Elon Musk',
        occupation: 'CEO of Space-X',
        image: 
                 'Elon_Musk.jpg',
        review: 
                'Dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo'        
    },   
    {
        id: 4,
        name: 'Lionel Andres Santos Bareto Cuccetinni Messi',
        occupation: 'Footballer(World Cup Winner)',
        image: 
                 'messi.jpg',
        review: 
                'Sit amet consectetur adipisicing elit, a corrupti! Voluptate provident erroreaque tempora quo suscipit exercitationem perspiciatis.'        
    }     
];

// Selecting Items
let images = document.getElementById('images');
let names = document.getElementById('name');
let occupation = document.getElementById('occupation');
let reviewInfo = document.getElementById('review-info');

const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');
const footerBtn = document.querySelector('.footer');

//Setting current review to 0;
let currentReview = 0;

function updateReview() {
    const reviewsEl = reviews[currentReview];
    images.src = reviewsEl.image;
    names.textContent = reviewsEl.name;
    occupation.textContent = reviewsEl.occupation;
    reviewInfo.textContent = reviewsEl.review;
};

//Decrementing currentReview when clicked
prevBtn.addEventListener('click' , function() {
    currentReview--; 
    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    updateReview();   
});

//Incrementing currentReview when clicked
nextBtn.addEventListener('click' , function() {
    currentReview++;  
    if (currentReview >= reviews.length) {
        currentReview = 0;
    }
    updateReview();
});

// Random Button
footerBtn.addEventListener('click' , function() {
    currentReview = Math.floor(Math.random() * reviews.length)
    updateReview();
});


