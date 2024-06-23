// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
    heart.addEventListener('click', async () => {
      try {
        await mimicServerCall(); // Simulate server call

        if (heart.classList.contains('activated-heart')) {
          heart.classList.remove('activated-heart');
          heart.textContent = EMPTY_HEART;
        } else {
          heart.classList.add('activated-heart');
          heart.textContent = FULL_HEART;
        }

      } catch (error) {
        // Show error message (normally this should not happen based on given instructions)
        console.error('Error:', error);
        alert('Error: Failed to like. Please try again.');
      }
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
