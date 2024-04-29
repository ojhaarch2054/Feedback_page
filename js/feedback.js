import { Feedback } from "./class/feedbackClass.js";

const feedbackinstance = new Feedback()

// Select all star icons
const stars = document.querySelectorAll('.fa-star');

// Add click event listener to each star
stars.forEach(function(star, index) {
  star.addEventListener('click', function() {
    if (star.classList.contains('fas')) {
      // If this star is already filled, empty it and all stars after it
      for (let i = index; i < stars.length; i++) {
        stars[i].classList.remove('fas');
        stars[i].classList.add('far');
      }
    } else {
      // If this star is not filled, fill it and all stars before it
      for (let i = 0; i <= index; i++) {
        stars[i].classList.remove('far');
        stars[i].classList.add('fas');
      }
      // Empty all stars
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove('fas');
        stars[i].classList.add('far');
      }
    }
  });
});

console.log(feedbackinstance);
// Select feedback section input
const FullName = document.querySelector('#FullName');
const Email = document.querySelector('#Email');
const feedbackArea = document.querySelector('#feedbackArea');
//const rating = document.querySelectorAll('.far fa-star');


// Add event listener to the Submit button
document.querySelector('.btnFeedback').addEventListener('click', (event) => {
  event.preventDefault();

  // Retrieve feedback data
  const Fullname = FullName.value;
  const email = Email.value;
  const feedback = feedbackArea.value;

   // Get the star rating
   const filledStars = document.querySelectorAll('.fas.fa-star');
   const Satisfaction_rating = filledStars.length;

  //take only email type dataa
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    Email.value = ''; // Clear the email field after showing alert
    return;
  }
  
  // Attempt to submit
  feedbackinstance.feedbackSection(Fullname, email, feedback, Satisfaction_rating).then(user => {
     // If submission is successful, show the submitted alert
     alert("Thank you for submitting Feedback 😊");

     // Clear the input fields
     FullName.value = '';
     Email.value = '';
     feedbackArea.value = '';

      // Make the stars appear empty
      filledStars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
      });

   })
   .catch(error => {
     // If submitting fails
     alert(error);
   });
});

 