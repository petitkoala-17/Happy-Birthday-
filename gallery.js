// JavaScript for the gallery

// Function to reveal the image when clicked
function revealImage(image) {
      // Remove the 'blurred' class and add the 'revealed' class
      if (image.classList.contains('blurred')) {
          image.classList.remove('blurred');
          image.classList.add('revealed');
      }
  }
  