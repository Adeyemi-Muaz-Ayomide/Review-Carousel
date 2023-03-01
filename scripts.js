// const reviews = [
//     {
//         id: 1,
//         name: 'Asiwaju Bola Ahmed Tinubu',
//         occupation: 'Politician',
//         picture: 
//                 "Tinubu-img.webp",
//         review: 
//                 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo suscipit sed vel esse repellat hic exercitationem perspiciatis.'        
//     },  
//     {
//         id: 2,
//         name: 'Peter Drury',
//         occupation: 'Commentator',
//         picture: 
//                  'peter-drury.jpg',
//         review: 
//                 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo suscipit sed vel esse repellat hic exercitationem perspiciatis.'        
//     }, 
//     {
//         id: 3,
//         name: 'Elon Musk',
//         occupation: 'CEO of Space-X',
//         picture: 
//                  'Elon_Musk.jpg',
//         review: 
//                 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo suscipit sed vel esse repellat hic exercitationem perspiciatis.'        
//     },   
//     {
//         id: 4,
//         name: 'Lionel Andres Santos Bareto Cuccetinni Messi',
//         occupation: 'Footballer(World Cup Winner)',
//         picture: 
//                  'messi.jpg',
//         review: 
//                 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Minus, a corrupti! Quibusdam, itaque esse. Porro aut, voluptate provident erroreaque tempora quo suscipit sed vel esse repellat hic exercitationem perspiciatis.'        
//     }     
// ];


// let images = document.getElementById('images');
// let names = document.getElementById('name');
// let occupation= document.getElementById('occupation');
// let review = document.getElementById('review')

// let btnLeft = document.getElementById("left");
// let btnRight = document.getElementById("right");
// let surprise = document.getElementById('suprise')



// let currentReview = 0;
// let randomShow = randomSlideShow();

// window.addEventListener('DOMContentLoaded', function() {
//     showEverything();
  
    
   
// })


// function showEverything() {
//     const items =  reviews[randomShow];
//     review.textContent = items.review;
//     occupation.textContent = items.occupation;
//     names.textContent = items.name;
//     images.src = items.picture;
// }



// function randomSlideShow() {
//     return Math.floor(Math.random() * reviews.length)
// }


// btnLeft.addEventListener('click', function() {
//     currentReview--;
    
    
// })

// btnRight.addEventListener('click', function() {
//     currentReview++;
//     showEverything();
   
// })

// surprise.addEventListener('click' , function() {
//     reviews[randomShow]
// })




// console.log(btnLeft)