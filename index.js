

let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // let nav = document.querySelector("#nav-bar");
  // const navDarkMode = () => {
  //   nav.style.color = "white";
  // }
}
themeButton.addEventListener("click", toggleDarkMode);


// TODO: Remove the click event listener that calls addSignature()


// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;

  petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Validate the value of each input
  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}


// TODO: Call addSignature() and clear fields if no errors
let SignNowButton = document.querySelector('sign-now-button')
const addSignature = () => {
  let count = 3;
  count.remove();

  count += 1;
  // Write your code to manipulate the DOM here
  let newCounter = document.getElementById('counter');
  newCounter.id = "counter";
  newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";

  // Append the new counter to the DOM
  let signatures = document.querySelector('.signatures');
  let newSignature = document.createElement('p');
  signatures.appendChild(newSignature);
  newSignature.createTextNode("🖊️ " + count + " people have signed this petition and support this cause.")

}
SignNowButton.addEventListener('click', validateForm);






let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'

}
let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  for (i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers.classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers.classList.remove("active");
    }

  }
}
window.addEventListener("scroll", reveal);


let person = {
  name: petitionInputs[0].value,
  hometown: petitionInputs[1].value,
  email: petitionInputs[2].value
};

// Refactor code using the person object
// For example, instead of the old code
if (petitionInputs[1].value.length < 2) {
  containErrors = true;
  petitionInputs[i].classList.add('error');
}

// You can use the person object
if (person.hometown.length < 2) {
  containErrors = true;
  petitionInputs[i].classList.add('error');
}
else {
  petitionInputs[i].classList.remove('error');
}

// TODO: Call addSignature() and clear fields if no errors
// let SignNowButton = document.querySelector('sign-now-button')
SignNowButton.addEventListener('click', validateForm);

// Updated addSignature function definition
function addSignature(person) {
  // Use the person object properties instead of selecting elements by ID
  let newSignature = document.createElement("div");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} (${person.email}) supports this cause.`;


}

// Function to toggle the modal
function toggleModal(person) {
  // Select the modal and modal content
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");

  // Set the display style property of the entire modal to flex
  modal.style.display = "flex";

  // Set the content of the modal (you can customize this based on the person object)
  modalContent.textContent = `Thank you, ${person.name}, for supporting our cause!`;

  // Use setTimeout to hide the modal after a few seconds (e.g., 3000 milliseconds or 3 seconds)
  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}

// Create variables
var scaleFactor = 1;
var modalImage = document.querySelector("#thanks-modal img");
var intervalId;

// Function to scale the image
function scaleImage() {
  // Toggle the scaleFactor between 1 and 0.8
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;

  // Apply the scaleFactor to the image
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// Function to toggle the modal
function toggleModal(person) {
  // Select the modal and modal content
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");

  // Set the display style property of the entire modal to flex
  modal.style.display = "flex";

  // Set the content of the modal (customize the message based on the person object)
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;

  // Set a timeout to hide the modal after a few seconds
  setTimeout(function() {
    modal.style.display = "none";
    clearInterval(intervalId); // Stop the animation
  }, 4000); // 4 seconds

  // Set an interval for the image animation
  intervalId = setInterval(scaleImage, 500); // Scale every half a second
}

// Select the close button
let closeButton = document.getElementById("close-modal-button");

// Function to close the modal
function closeModal() {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
  clearInterval(intervalId); // Stop the animation
}

// Add click event listener to the close button
closeButton.addEventListener("click", closeModal);