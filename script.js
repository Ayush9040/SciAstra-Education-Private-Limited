// Function to add a message to the chatbot
function addMessage(message, sender) {
  const chatbotMessages = document.getElementById('chatbot-messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

let pagesWrapper = document.createElement('a');
pagesWrapper.setAttribute("href", "https://www.sciastra.com/"); 
pagesWrapper.textContent = "Click Me";

// Function to process user input and generate appropriate responses
function processUserInput(input) {
  // Check for keywords or patterns in the user input and generate appropriate responses
  if (input.includes('application form deadline')) {
    addMessage(`The application form deadline for various exams can be found on the "Exams" page. <a href="exams.html">Click here</a> to visit the Exams page.`, 'chatbot');
  } else if (input.includes('FAQ') || input.includes('frequently asked questions')) {
    addMessage('You can find the frequently asked questions on the "FAQ" page. <a href="faq.html">Click here</a> to visit the FAQ page.', 'chatbot');
  } else {
    addMessage('Sorry, I did not understand your message. Please try again or visit our homepage for more information.', 'chatbot');
  }
}

// Function to handle user input submission
function handleUserInput(event) {
  if (event.keyCode === 13) {
    const userInput = document.getElementById('chatbot-input').value;
    addMessage(userInput, 'user');
    processUserInput(userInput.toLowerCase());
    document.getElementById('chatbot-input').value = '';
  }
}

// Attach event listener to user input field
document.getElementById('chatbot-input').addEventListener('keydown', handleUserInput);
