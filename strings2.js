// Select the form and result message elements for palindrome checker
const palindromeForm = document.getElementById('palindromeForm');
const resultMessage = document.getElementById('resultMessage');

// Handle form submission for palindrome checker
palindromeForm.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input
  const userInput = document.getElementById('userInput').value.trim();

  // Check if the input is a palindrome
  const isPalindrome = userInput === userInput.split('').reverse().join('');
  
  // Display the result
  if (isPalindrome) {
    resultMessage.innerHTML = `<span style="color: green;">"${userInput}" is a palindrome!</span>`;
  } else {
    resultMessage.innerHTML = `<span style="color: red;">"${userInput}" is not a palindrome.</span>`;
  }

  // Clear the input field
  document.getElementById('userInput').value = '';
};

// Select the form and result message elements for user input validation
const userForm = document.getElementById('userForm');

// Handle form submission for user input validation
userForm.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user inputs
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const zipCode = document.getElementById('zipCode').value.trim();

  // Combine first and last names
  const fullName = `${firstName} ${lastName}`;

  // Validate the full name length
  if (fullName.length > 20) {
    resultMessage.innerHTML = `<span style="color: red;">The combined name must not exceed 20 characters.</span>`;
    return;
  }

  // Validate the zip code (must be 5 digits)
  if (!/^\d{5}$/.test(zipCode)) {
    resultMessage.innerHTML = `<span style="color: red;">The zip code must be exactly 5 digits.</span>`;
    return;
  }

  // If the inputs are valid, show the secret message
  resultMessage.innerHTML = `<span style="color: green;">Success! The secret message is: "Never stop learning and growing."</span>`;

  // Clear the input fields
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('zipCode').value = '';
};