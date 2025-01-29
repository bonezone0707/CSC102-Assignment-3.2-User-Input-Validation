// Function to check if input is a palindrome
function checkPalindrome() {
  const userInput = document.getElementById('userInput').value.trim();
  const resultMessage = document.getElementById('resultMessage');

  if (userInput === "") {
    resultMessage.textContent = "Please enter a word or phrase.";
    resultMessage.className = "error-message";
    return;
  }

  const isPalindrome = userInput === userInput.split('').reverse().join('');

  if (isPalindrome) {
    resultMessage.textContent = `"${userInput}" is a palindrome!`;
    resultMessage.className = "success-message";
  } else {
    resultMessage.textContent = `"${userInput}" is not a palindrome.`;
    resultMessage.className = "error-message";
  }

  document.getElementById('userInput').value = "";
}

// Function to validate user input
function validateUserInput() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const zipCode = document.getElementById('zipCode').value.trim();
  const resultMessage = document.getElementById('resultMessage');

  if (firstName === "" || lastName === "" || zipCode === "") {
    resultMessage.textContent = "All fields are required.";
    resultMessage.className = "error-message";
    return;
  }

  const fullName = `${firstName} ${lastName}`;

  if (fullName.length > 20) {
    resultMessage.textContent = "The combined name must not exceed 20 characters.";
    resultMessage.className = "error-message";
    return;
  }

  if (!/^\d{5}$/.test(zipCode)) {
    resultMessage.textContent = "The zip code must be exactly 5 digits.";
    resultMessage.className = "error-message";
    return;
  }

  resultMessage.textContent = 'Success! The secret message is: "Never stop learning and growing."';
  resultMessage.className = "success-message";

  document.getElementById('firstName').value = "";
  document.getElementById('lastName').value = "";
  document.getElementById('zipCode').value = "";
}
