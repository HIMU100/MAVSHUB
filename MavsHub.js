const simulatedUsers = [
    { id: 1, name: "Alice Smith", email: "alice@mavs.uta.edu" },
    { id: 2, name: "Bob Johnson", email: "bob@mavs.uta.edu" },
    { id: 3, name: "Charlie Brown", email: "charlie@mavs.uta.edu" }
];

// Simulated chat messages
let chatMessages = [
    { user: "Alice Smith", message: "Hello everyone!" },
    { user: "Bob Johnson", message: "Hi Alice, how are you?" },
    { user: "Charlie Brown", message: "Hey folks, what's the assignment for tomorrow?" }
];

// DOM Elements
const loginForm = document.getElementById('student-login');
const signupForm = document.getElementById('student-signup');
const chatSection = document.createElement('section');
chatSection.id = 'chat';
chatSection.innerHTML = '<h2>Chat</h2><div id="chat-messages"></div><input type="text" id="chat-input" placeholder="Type your message..."><button id="send-message">Send</button>';

// Function to display chat messages
function displayChatMessages() {
    const chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = '';
    chatMessages.forEach(msg => {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${msg.user}: ${msg.message}`;
        chatMessagesDiv.appendChild(messageElement);
    });
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

// Function to add a new message
function addMessage(user, message) {
    chatMessages.push({ user, message });
    displayChatMessages();
}

// Event listener for login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    // In a real application, you would validate credentials against a backend
    alert(`Login attempt with email: ${email}`);
    showChatInterface();
});

// Event listener for signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const studentId = document.getElementById('signup-studentid').value;
    const password = document.getElementById('signup-password').value;
    alert(`Sign up attempt with email: ${email} and student ID: ${studentId}`);
    showChatInterface();
});

// Function to show chat interface
function showChatInterface() {
    document.querySelector('main').appendChild(chatSection);
    displayChatMessages();
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
}

// Event listener for sending a message
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'send-message') {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim();
        if (message) {
            addMessage("You", message);
            chatInput.value = '';
            setTimeout(() => {
                const randomUser = simulatedUsers[Math.floor(Math.random() * simulatedUsers.length)];
                addMessage(randomUser.name, "Thanks for your message!");
            }, 1000);
        }
    }
});

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = simulatedUsers.filter(user => 
        user.name.toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(filteredUsers);
});

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results') || document.createElement('div');
    searchResultsDiv.id = 'search-results';
    searchResultsDiv.innerHTML = '';
    results.forEach(user => {
        const userElement = document.createElement('p');
        userElement.textContent = `${user.name} (${user.email})`;
        searchResultsDiv.appendChild(userElement);
    });
    document.getElementById('search').appendChild(searchResultsDiv);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('MavsHub.js loaded and initialized');
});